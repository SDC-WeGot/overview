const fs = require('fs');

const generateUrls = function generateUrls(n) {
  let count = n;
  const size = 1000000;
  while (count > 0) {
    const urls = [''];
    for (let i = 0; i < size; i += 1) {
      const id = Math.floor(Math.random() * 10000000);
      urls.push(`/restaurants/${id}/`);
      urls.push(`/restaurants/${id}/bundle.js`);
      urls.push(`/api/restaurants/${id}/overview`);
    }
    if (count === n) {
      fs.writeFileSync('wlog.log', urls.join('\0'));
    } else {
      fs.appendFileSync('wlog.log', urls.join('\0'));
    }
    count -= size;
  }
};

generateUrls(10000000);

