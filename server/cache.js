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

// const REDIS_PORT = 6379;
// const client = redis.createClient({ host: 'localhost', port: REDIS_PORT });

const cache = function cache(req, res, next) {
  const { id } = req.params;
  cluster.get(id, (err, data) => {
    if (err) { throw err; }
    if (data !== null) {
      res.send(data);
    } else {
      next();
    }
  });
};

module.exports = cache;
