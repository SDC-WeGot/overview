const pgp = require('pg-promise')({});
const db = require('./db');
const fakeDataGenerator = require('../fakeDataGenerator');

(async function seedPG() {
  const getNextData = function getNextData(pageIndex) {
    return new Promise((resolve) => {
      if (pageIndex === 10000) {
        resolve(null);
      }
      const results = [];
      for (let i = 0; i < 1000; i += 1) {
        const id = (pageIndex * 1000) + i + 1;
        results.push(fakeDataGenerator(id));
      }
      resolve(results);
    });
  };

  const columnSet = new pgp.helpers.ColumnSet([
    '_id',
    'name',
    'tagline',
    'type',
    'vicinity',
    { name: 'pricelevel', prop: 'priceLevel' },
    { name: 'zagatfood', prop: 'zagatFood' },
    { name: 'zagatdecor', prop: 'zagatDecor' },
    { name: 'zagatservice', prop: 'zagatService' },
    { name: 'longdescription', prop: 'longDescription' },
  ], { table: 'restaurants' });

  try {
    await db.none('TRUNCATE table restaurants;');
  } catch (error) {
    console.log(`Error truncating: ${error}`);
  }

  db.tx('massive-insert', t =>
    t.sequence(index =>
      getNextData(index)
        .then((data) => {
          if (data) {
            const insert = pgp.helpers.insert(data, columnSet);
            return t.none(insert);
          }
          return undefined;
        })))
    .then((data) => {
      console.log('Total batches:', data.total, ', Duration:', data.duration);
    })
    .catch((error) => {
      console.log(`Error seeding: ${error}`);
    });
}());

