const { getDB } = require('./db');

const findOneById = async (id) => {
  const col = getDB();
  // const col = db.collection('restaurants');
  const restaurant_id = +id;
  return col.findOne({ restaurant_id });
};


exports.findOneById = findOneById;
