// const db = require('./../../db_mongo/controller_driver.js');
const db = require('./../../db_pg/controller.js');

const actions = {
  GET: async function respondToGETRequest(req, res) {
    try {
      const result = await db.findOneById(req.params.id);
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
