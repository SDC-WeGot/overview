// const mongoose = require('mongoose');
// require('newrelic');

const { connectToServer } = require('../db_mongo/db');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const config = require('../webpack.config.js');
const app = require('./app');

//  const dbAddress = process.env.DB_ADDRESS || 'localhost';


//  mongoose.connect(`mongodb://${dbAddress}/weGotData`);
// const compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// }));

connectToServer()
  .then(() => {
    app.listen(3002, () => {
      console.log('Listening on port 3002');
    });
  })
  .catch((err) => {
    console.log(`unable to connect to mongo: ${err}`);
  });

// app.listen(3002, () => {
//   console.log('Listening on port 3002');
// });


// =============================================================== //
// ===== webpack lines commented for proxy server purposes ======= //
// =============================================================== //
