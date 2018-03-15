const pgp = require('pg-promise')({});
const path = require('path');
const sql = require('../helpers/files');

async function createDB() {
  const connectionStringPg = 'postgres://localhost:5432/postgres';
  const connectionStringZagat = 'postgres://localhost:5432/zagat';
  const dbPG = pgp(connectionStringPg);
  const createDBFullPath = path.join(__dirname, './createDatabase.sql');
  const createSchemaFullPath = path.join(__dirname, './createSchema.sql');
  const sqlCreateDB = sql(createDBFullPath);
  const sqlCreateSchema = sql(createSchemaFullPath);
  try {
    await dbPG.none(sqlCreateDB);
    console.log('done creating db');
  } catch (error) {
    console.log(`error creating db: ${error}`);
  } finally {
    try {
      const dbZagat = pgp(connectionStringZagat);
      await dbZagat.none(sqlCreateSchema);
      console.log('done creating schema');
    } catch (error) {
      console.log(`error creating schema: ${error}`);
    }
  }
}
createDB();

