const pgp = require('pg-promise')({});
const cluster = require('cluster');
const path = require('path');
const numCPUs = require('os').cpus().length;
const sql = require('./helpers/files');

const db = require('./db');
const fakeDataGenerator = require('../fakeDataGenerator');

const time = new Date().getTime();

const columnSet = new pgp.helpers.ColumnSet([
  'restaurant_id',
  'name',
  'tagline',
  'type',
  'vicinity',
  'priceLevel',
  'zagatFood',
  'zagatDecor',
  'zagatService',
  'longDescription',
], { table: 'restaurants' });

let countRemaining = 10000000 / numCPUs;
const count = 10000000 / numCPUs;
const size = 20000;

const getNextData = function getNextData(pageIndex, cpuNumber) {
  return new Promise((resolve) => {
    if (countRemaining <= 0) {
      resolve(null);
    }
    const results = [];
    for (let i = 0; i < size; i += 1) {
      const id = (cpuNumber * count) + (pageIndex * size) + i + 1;
      results.push(fakeDataGenerator(id));
    }
    countRemaining -= size;
    resolve(results);
  });
};

async function clearDB() {
  try {
    await db.none('TRUNCATE table restaurants;');
    console.log('done truncating table');
  } catch (error) {
    console.log(`Error truncating: ${error}`);
  }
}

async function seedDB(cpuNumber) {
  db.tx('massive-insert', t =>
    t.sequence(index =>
      getNextData(index, cpuNumber)
        .then((data) => {
          if (data) {
            const insert = pgp.helpers.insert(data, columnSet);
            return t.none(insert);
          }
          return undefined;
        })))
    .then((data) => {
      console.log('Total batches:', data.total, ', Duration:', data.duration);
      process.exit();
    })
    .catch((error) => {
      console.log(`Error seeding: ${error}`);
      process.exit();
    });
}

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  clearDB()
    .then(() => {
      // Fork workers.
      for (let i = 0; i < numCPUs; i += 1) {
        cluster.fork();
      }
      let countExits = 0;
      cluster.on('exit', async (worker) => {
        console.log(`worker ${worker.process.pid} finished`);
        console.log(`done in ${(new Date().getTime() - time) / 1000} seconds`);
        countExits += 1;
        if (countExits === numCPUs) {
          //  exit master after all workers have exited
          const createIndexPath = path.join(__dirname, './schema/createIndex.sql');
          const createIndexSQL = sql(createIndexPath);
          await db.none(createIndexSQL);
          process.exit();
        }
      });
    })
    .catch((error) => {
      console.log(`Error clearing DB: ${error}`);
    });
} else {
  seedDB(cluster.worker.id - 1);
  console.log(`Worker ${process.pid} started`);
}

