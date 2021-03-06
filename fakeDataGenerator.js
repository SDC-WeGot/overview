const faker = require('faker');

const capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
};

const generateFakeObject = function generateFakeObject(id) {
  const obj = {
    restaurant_id: id,
    name: `${capitalizeFirstLetter(faker.hacker.adjective())} ${capitalizeFirstLetter(faker.hacker.noun())}`,
    tagline: `${faker.lorem.sentence(10)}`,
    type: 'Restaurant',
    vicinity: `${faker.address.streetAddress(true)}`,
    priceLevel: `${faker.random.number({ min: 1, max: 4, precision: 1 })}`,
    zagatFood: `${faker.finance.amount(0, 5, 1)}`,
    zagatDecor: `${faker.finance.amount(0, 5, 1)}`,
    zagatService: `${faker.finance.amount(0, 5, 1)}`,
    longDescription: `${faker.lorem.paragraph(3)}`,
  };
  return obj;
};

module.exports = generateFakeObject;
