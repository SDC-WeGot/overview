//  loader for caching bundle.js, thought this might be faster so that subsequent requests
// for the bundle could be served from memory
const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '../client/dist/bundle.js');

const bundle = fs.readFileSync(bundlePath, 'utf8');

module.exports = bundle;
