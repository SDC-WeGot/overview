const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'weGotData';

const fakeDataGenerator = require('./fakeDataGenerator');

(async function seedDB() {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    const col = db.collection('restaurants');
    await col.deleteMany({});
    console.log(`Starting: ${(new Date()).toString()}`);
    for (let j = 0; j < 100000; j += 1) {
      const objects = [];
      for (let i = 0; i < 100; i += 1) {
        const restaurantObj = fakeDataGenerator();
        restaurantObj._id = (j * 100000) + i + 1;
        objects.push(restaurantObj);
      }
      await db.collection('restaurants').insertMany(objects);
    }
    console.log(`Finished: ${(new Date()).toString()}`);
  } catch (err) {
    console.log(err.stack);
  }
  // Close connection
  client.close();
}());
