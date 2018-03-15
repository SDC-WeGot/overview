const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  // id: {
  //   type: Number,
  //   unique: true,
  // },
  id: Number,
  name: String,
  tagline: String,
  type: String,
  vicinity: String,
  priceLevel: Number,
  zagatFood: Number,
  zagatDecor: Number,
  zagatService: Number,
  longDescription: String,
});

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

module.exports = RestaurantModel;
