const mongoose = require('mongoose');

const dbAddress = process.env.DB_ADDRESS || 'localhost';
mongoose.connect(`mongodb://${dbAddress}/weGotData`);

module.exports = mongoose;
