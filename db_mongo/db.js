// import { mongo } from 'mongoose';

// const mongoose = require('mongoose');

// const dbAddress = process.env.DB_ADDRESS || 'localhost';
// mongoose.connect(`mongodb://${dbAddress}/weGotData`);

// module.exports = mongoose;

const { MongoClient } = require('mongodb');

const dbAddress = process.env.DB_ADDRESS;
const userInfo = process.env.MONGO_USER;

// const url = 'mongodb://localhost:27017';
const url = `mongodb://${userInfo}@${dbAddress}:27017/weGotData`;
const dbName = 'weGotData';

let collection;

module.exports = {
  connectToServer: async () => {
    try {
      const client = await MongoClient.connect(url, { poolSize: 15 });
      collection = client.db(dbName).collection('restaurants');
      // collection = client.collection('restaurants');
    } catch (error) {
      throw new Error(error);
    }
  },
  getDB: () => collection,
};

