const redis = require('redis');

const REDIS_PORT = 6379;
const client = redis.createClient({ host: 'localhost', port: REDIS_PORT });

const cache = function cache(req, res, next) {
  const { id } = req.params;
  console.log(`id ${id} requested from cache`);
  client.get(id, (err, data) => {
    console.log('redis get returned');
    if (err) { throw err; }
    if (data !== null) {
      console.log(`found in cache: ${JSON.stringify(data)}`);
      res.send(data);
    } else {
      next();
    }
  });
};

module.exports = cache;
