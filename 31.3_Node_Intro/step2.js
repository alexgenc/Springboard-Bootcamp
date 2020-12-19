const fs = require('fs');
const process = require('process');
const axios = require('axios');


// Read local file
function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      // handle possible error
      console.error(err);
      // kill the process and tell the shell it errored
      process.exit(1);
    }
    // otherwise success
    console.log(data);
  });
}

// Read web URL
async function webCat(url) {
  try {
    let res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.error(err);
    process.exit(1);
  }
}

// Get path from command line arg
let path = process.argv[2];

// Check if path is for URL or local file, and call the corresponding function
if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
};