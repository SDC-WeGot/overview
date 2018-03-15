const pgp = require('pg-promise');

const connectionString = 'postgres://postgres@localhost:543/zagat';

const db = pgp(connectionString);

module.exports = db;
