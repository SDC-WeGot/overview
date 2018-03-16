const db = require('./db');

const findOneById = id => new Promise((resolve, reject) => {
  db.one(`SELECT * FROM restaurants where _id = $1`, [id])
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports.findOneById = findOneById;

