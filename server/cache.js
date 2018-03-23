const redis = require('redis');

const REDIS_PORT = 6379;
const client = redis.createClient({ host: 'localhost', port: REDIS_PORT });

const cache = function cache(req, res, next) {
  const { id } = req.params;
  client.get(id, (err, data) => {
    if (err) { throw err; }
    if (data !== null) {
      res.send(data);
    } else {
      next();
    }
  });
};

module.exports = cache;
