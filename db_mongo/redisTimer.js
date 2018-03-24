// const redis = require('redis');
const Redis = require('ioredis');
const { generateUrls } = require('../generateUrls');
const Promise = require('bluebird');

// const REDIS_PORT = 6379;
// const client = Promise.promisifyAll(redis.createClient({ host: 'localhost', port: REDIS_PORT }));

const cluster = Promise.promisifyAll(new Redis.Cluster([{
  port: 30001,
  host: '127.0.0.1',
}, {
  port: 30002,
  host: '127.0.0.1',
}, {
  port: 30003,
  host: '127.0.0.1',
}, {
  port: 30004,
  host: '127.0.0.1',
}, {
  port: 30005,
  host: '127.0.0.1',
}, {
  port: 30006,
  host: '127.0.0.1',
}]));

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
      await cluster.getAsync(obj.vars.restaurantId);
      times.push(new Date().getTime() - startTime);
    } catch (error) {
      console.log(`error retrieving id: ${error}`);
    }
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(`Average time: ${times.reduce(reducer) / times.length} ms`);
};

queryAsync(1000);

