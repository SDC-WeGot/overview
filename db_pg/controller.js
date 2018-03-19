const db = require('./db');

const findOneById = async (id) => {
  try {
    return db.one('SELECT * FROM restaurants where restaurant_id = $1', [id]);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.findOneById = findOneById;

