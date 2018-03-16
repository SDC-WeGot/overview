const pgp = require('pg-promise')({});

const connectionString = 'postgres://localhost:5432/zagat';

const db = pgp(connectionString);

module.exports = db;
