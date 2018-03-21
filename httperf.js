const util = require('util');
const exec = util.promisify(require('child_process').exec);
const generateUrls = require('./generateUrls');

generateUrls(1000000);

async function ls() {
  const { stdout, stderr } = await exec('httperf --server localhost --port 3002 --wlog Y,wlog.log --num-conns 10 --rate 10 --timeout 1');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}
ls();

