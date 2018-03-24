const redis = require('redis');
const { generateUrls } = require('../generateUrls');
const Promise = require('bluebird');

const REDIS_PORT = 6379;
const client = Promise.promisifyAll(redis.createClient({ host: 'localhost', port: REDIS_PORT }));

const queryAsync = async function queryAsync(n) {
  const obj = { };
  obj.vars = { };
  const done = () => {
    // generated id
  };
  const times = [];
  const range = [...Array(n).keys()];
  for (let i = 0; i < range.length; i += 1) {
    generateUrls(obj, null, done);
    const startTime = new Date().getTime();
    try {
      await client.getAsync(obj.vars.restaurantId);
      times.push(new Date().getTime() - startTime);
    } catch (error) {
      console.log(`error retrieving id: ${error}`);
    }
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(`Average time: ${times.reduce(reducer) / times.length} ms`);
};

queryAsync(1000);

