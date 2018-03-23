const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '../client/dist/bundle.js');

const bundle = fs.readFileSync(bundlePath, 'utf8');

module.exports = bundle;
