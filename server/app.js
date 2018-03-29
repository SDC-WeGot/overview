const express = require('express');
 const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const handler = require('./routes/requestHandler.js');
const cache = require('./cache');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  //  res.redirect('/restaurants/ChIJUcXYWWGAhYARmjMY2bJAG2s');
  res.redirect('/restaurants/1');
});

//  send back gzipped bundle.js
app.get('*bundle.js', (req, res) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.download(path.resolve(__dirname, '../client/dist/bundle.js.gz'));
});

app.get('/app.js', (req, res) => {
  res.download(path.resolve(__dirname, '../client/dist/app.js'));
});

app.get('/app-server.js', (req, res) => {
  res.download(path.resolve(__dirname, '../client/dist/app-server.js'));
});

app.get('/api/restaurants/:id/overview', cache, handler.requestHandler);

module.exports = app;

