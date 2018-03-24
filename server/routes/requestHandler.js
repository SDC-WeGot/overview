// const redis = require('redis');
const Redis = require('ioredis');

const cluster = new Redis.Cluster([{
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
}]);

const db = require('./../../db_mongo/controller_driver.js');
// const db = require('./../../db_pg/controller.js');

// const REDIS_PORT = 6379;
// const client = redis.createClient({ host: 'localhost', port: REDIS_PORT });

const actions = {
  GET: async function respondToGETRequest(req, res) {
    try {
      const result = await db.findOneById(req.params.id);
      cluster.set(req.params.id, JSON.stringify(result));
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  },
};

const requestHandler = (req, res) => {
  if (actions[req.method]) {
    actions[req.method](req, res);
  } else {
    res.sendStatus(404);
  }
};

module.exports.requestHandler = requestHandler;
