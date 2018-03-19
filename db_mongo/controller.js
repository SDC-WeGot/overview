const RestaurantModel = require('./model');

const findOneById = (restaurant_id, callback) => {
  RestaurantModel.find({ restaurant_id }, callback);
};

const insertMany = (restaurant, callback) => {
  RestaurantModel.insertMany(restaurant, callback);
};

const insertOne = (restaurant, callback) => {
  const restaurantDoc = new RestaurantModel(restaurant);
  restaurantDoc.save(callback);
  // RestaurantModel.create(restaurant, callback);
};

const count = () => RestaurantModel.count();

exports.findOneById = findOneById;
exports.insertMany = insertMany;
exports.insertOne = insertOne;
exports.count = count;

