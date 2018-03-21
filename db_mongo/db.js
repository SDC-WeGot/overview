// import { mongo } from 'mongoose';

// const mongoose = require('mongoose');

// const dbAddress = process.env.DB_ADDRESS || 'localhost';
// mongoose.connect(`mongodb://${dbAddress}/weGotData`);

// module.exports = mongoose;

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'weGotData';

let mongodb;

module.exports = {
  connectToServer: async () => {
    try {
      const client = await MongoClient.connect(url, { poolSize: 10 });
      mongodb = client.db(dbName);
    } catch (error) {
      throw new Error(error);
    }
  },
  getDB: () => mongodb,
};

