# WeGot - Restaurant Rating Service

> This project is a limited emulation Zagat.com's restaurant description page

## Related Projects

  - https://github.com/SDC-WeGot/gallery
  - https://github.com/SDC-WeGot/overview
  - https://github.com/SDC-WeGot/sidebar
  - https://github.com/SDC-WeGot/recommendations

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Steps for using:
> 1. For seeding the mongo database run "npm run seedMongo" 
> 2. Build the bundle.js for client side code using "webpack -p"
> 3. Start the server by running "npm start"
> 4. Access server at http://127.0.0.1:3002

## Requirements

This project is using:
- Node 9.5.0
- Express
- MongoDB
- Jest
- Enzyme
- Webpack

## Development

This project is no longer using webpack-dev-middleware!!! You need to run webpack manually. See below.

### Installing Dependencies

From within the root directory:
```sh
Install dependencies: npm install OR yarn install
Start webpack: webpack -p
Start server: npm start OR yarn start
Spin up mongo on your computer and then: npm run seed OR yarn seed
```


