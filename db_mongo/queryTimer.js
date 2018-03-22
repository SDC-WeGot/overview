const { connectToServer, getDB } = require('../db_mongo/db');

const query = async (numQueries) => {
  await connectToServer();
  const col = getDB();
  const times = [];
  for (let i = 0; i < numQueries; i += 1) {
    const restaurant_id = Math.floor(Math.random() * 10000001);
    const startTime = new Date().getTime();
    await col.findOne({ restaurant_id });
    const totalTime = new Date().getTime() - startTime;
    times.push(totalTime);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(`Average query time: ${times.reduce(reducer) / times.length} ms`);
};

query(1000);
