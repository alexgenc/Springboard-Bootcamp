const fs = require('fs');
const process = require('process');
const axios = require('axios');

// Master function to decide what to do with data. If text, displays data. If output, outputs data.
function handleData(text, output) {
  if (output) {
    fs.writeFile(output, text, 'utf8', function(err) {
      if (err) {
        console.error(`Couldn't write ${out}: ${err}`);
        process.exit(1);
      }
    });
  } else {
    console.log(text);
  }
}

// Local file function
function cat(path, output) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      // handle possible error
      console.error(err);
      // kill the process and tell the shell it errored
      process.exit(1);
    }
    // otherwise success
    handleData(data, output)
  });
}

// Read web URL
async function webCat(url, output) {
  try {
    let res = await axios.get(url);
    handleData(res.data, output)
  } catch (error) {
    console.error(err);
    process.exit(1);
  }
}

let path;
let output;

// Check if --out is the 3rd process.argv. Set path and output variables based on that.
if (process.argv[2] === '--out') {
  output = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

// Check if path is for URL or local file, and call the corresponding function
if (path.slice(0, 4) === 'http') {
  webCat(path, output);
} else {
  cat(path, output);
};