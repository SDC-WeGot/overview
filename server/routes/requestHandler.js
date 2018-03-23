const redis = require('redis');

const db = require('./../../db_mongo/controller_driver.js');
// const db = require('./../../db_pg/controller.js');

const REDIS_PORT = 6379;
const client = redis.createClient({ host: 'localhost', port: REDIS_PORT });

const actions = {
  GET: async function respondToGETRequest(req, res) {
    try {
      const result = await db.findOneById(req.params.id);
      client.set(req.params.id, JSON.stringify(result));
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
