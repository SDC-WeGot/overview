const db = require('./db');

const query = async (numQueries) => {
  const times = [];
  for (let i = 0; i < numQueries; i += 1) {
    //  will give an id between 1 and 10,000,000
    const id = Math.floor(Math.random() * 10000001);
    const startTime = new Date().getTime();
    await db.one('SELECT * FROM restaurants where restaurant_id = $1', [id]);
    const totalTime = new Date().getTime() - startTime;
    times.push(totalTime);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(`Average query time: ${times.reduce(reducer) / times.length} ms`);
};

query(1000);
