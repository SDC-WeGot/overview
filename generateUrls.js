//  when running httperf
//  httperf --server localhost --port 3002
//    --wlog Y,wlog.log --num-conns 10000 --rate 100 --timeout 1
// const fs = require('fs');

// const generateUrls = function generateUrls(n) {
//   let count = n;
//   const size = 1000000;
//   while (count > 0) {
//     const urls = [''];
//     for (let i = 0; i < size; i += 1) {
//       const id = Math.floor(Math.random() * 10000000);
//       urls.push(`/restaurants/${id}/`);
//       urls.push(`/restaurants/${id}/bundle.js`);
//       urls.push(`/api/restaurants/${id}/overview`);
//     }
//     if (count === n) {
//       fs.writeFileSync('wlog.log', urls.join('\0'));
//     } else {
//       fs.appendFileSync('wlog.log', urls.join('\0'));
//     }
//     count -= size;
//   }
// };

// const generateUrls = function generateUrls(n = 100) {
const generateUrls = function generateUrls(userContext, events, done) {
  // keep the majority of requests in a small range
  const randomNumber = Math.random();
  let id;
  if (randomNumber < 0.85) {
    // 85% of the time the requests will hit id's 1,000 through 1050
    id = Math.floor(Math.random() * 50) + 1000;
  } else if (randomNumber >= 0.85 && randomNumber < 0.95) {
    // 10% of requests will fall over 50,000 through 50,500
    id = Math.floor(Math.random() * 500) + 50000;
  } else {
    //  rest of requests will be completely random
    id = Math.floor(Math.random() * 10000001);
  }
  userContext.vars.restaurantId = id;
  return done();
};

module.exports = {
  generateUrls,
};

