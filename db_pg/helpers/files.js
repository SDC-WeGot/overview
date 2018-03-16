const pgp = require('pg-promise');

const sql = function sql(fullPath) {
  return new pgp.QueryFile(fullPath, { minify: true });
};

module.exports = sql;

