const util = require('util');
const exec = util.promisify(require('child_process').exec);
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const generateUrls = require('./generateUrls');

async function ls() {
  try {
    const { stdout, stderr } = await exec('httperf --server localhost --port 3002 --wlog Y,wlog.log --num-conns 100 --rate 100 --timeout 1');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  } catch (error) {
    console.log(`error executing command: ${error}`);
  } finally {
    process.exit();
  }
}

if (cluster.isMaster) {
  generateUrls(1000000);

  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }
  let countExits = 0;
  cluster.on('exit', () => {
    console.log('process exitted');
    countExits += 1;
    if (countExits === numCPUs) {
      process.exit();
    }
  });
} else {
  ls();
}

