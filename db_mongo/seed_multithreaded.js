const { MongoClient } = require('mongodb');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const fakeDataGenerator = require('../fakeDataGenerator');

let client;
let db;
let col;
const url = 'mongodb://localhost:27017';

// clear current db
async function clearDB() {
  console.log('clearing db');
  client = await MongoClient.connect(url);
  console.log('connected');
  db = await client.db('weGotData');
  console.log('in wegotdata');
  col = await db.collection('restaurants');
  console.log('found collection');
  try {
    await col.drop();
    console.log('db cleared!');
  } catch (error) {
    console.log('drop failed most likely because the collection does not exist');
  }
}

const time = new Date().getTime();

async function seedDB(cpuNumber) {
  client = await MongoClient.connect(url);
  db = await client.db('weGotData');
  col = await db.collection('restaurants');
  const collection = db.collection('restaurants');

  let countRemaining = 10000000 / numCPUs;
  const count = 10000000 / numCPUs;
  const size = 20000;

  async function insertBulk(iteration) {
    const objects = [];
    for (let i = 0; i < size; i += 1) {
      const id = (cpuNumber * count) + (iteration * size) + i + 1;
      objects.push(fakeDataGenerator(id));
    }
    const ops = objects.map(object => ({ insertOne: { document: { ...object } } }));
    try {
      await collection.bulkWrite(ops, { ordered: false });
      countRemaining -= size;
      if (countRemaining > 0) {
        const nextIteration = iteration + 1;
        insertBulk(nextIteration);
      } else {
        console.log(`done in, ${(new Date().getTime() - time) / 1000} seconds`);
        client.close();
        process.exit();
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      client.close();
      process.exit();
    }
  }
  insertBulk(0);
}


if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  clearDB().then(() => {
    // Fork workers.
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }
    let countExits = 0;
    cluster.on('exit', (worker) => {
      console.log(`worker ${worker.process.pid} finished`);
      countExits += 1;
      if (countExits === numCPUs) {
        //  exit master after all workers have exited
        process.exit();
      }
    });
  });
} else {
  seedDB(cluster.worker.id - 1);
  console.log(`Worker ${process.pid} started`);
}

