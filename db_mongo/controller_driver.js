const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'weGotData';

const findOneById = async (id) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const col = db.collection('restaurants');
  const _id = +id;
  return col.findOne({ _id });
};

exports.findOneById = findOneById;
