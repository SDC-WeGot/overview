const express = require('express');
//  const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const handler = require('./routes/requestHandler.js');
// const bundle = require('./loader');
const cache = require('./cache');

const app = express();

app.use(cors());
// app.use(morgan('dev'));

app.get('/', (req, res) => {
  //  res.redirect('/restaurants/ChIJUcXYWWGAhYARmjMY2bJAG2s');
  res.redirect('/restaurants/1');
});

//  send back gzipped bundle.js
// app.get('*.js', (req, res, next) => {
//   req.url += '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });
// app.use('/restaurants/:id', express.static('client/dist'));
//  TODO implement this route so that proxy server can download bundle.js
// app.get('/download', (req, res) => {
//   res.download(path.resolve(__dirname, '../client/dist/bundle.js.gz'));
// });

app.get('/api/restaurants/:id/overview', cache, handler.requestHandler);

// app.get('/api/restaurants/:id/overview', handler.requestHandler);


module.exports = app;

