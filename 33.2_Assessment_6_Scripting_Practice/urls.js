const fs = require('fs');
const process = require('process');
const axios = require('axios');


function writeData(output, outputURL) {
    fs.writeFile(`${outputURL}.txt`, output, 'utf8', function(err) {
      if (err) {
        console.error(`Couldn't write ${outputURL}: ${err}`);
      }
    });
}

async function cat(path) {
  fs.readFile(path, 'utf8', async function(err, data) {
    if (err) {
      // handle possible error
      console.error(err);
      // kill the process and tell the shell it errored
      process.exit(1);
    }
    // otherwise success
    try {
      // Put all URLs in the file into an array
      const allURLs = [...data].join("").split("\n");
    
      // Remove the empty string from array
      allURLs.pop();

      for (url of allURLs) {
        let res = await axios.get(url);

        // Clean up the URLs
        let websiteURL = res.config.url.split("://")[1]
        let cleanedURL = websiteURL.split("/")[0];

        if (cleanedURL !== null) {
          writeData(res.data, cleanedURL);
        } else {
          console.log(`Couldn't write to file`);
        }
      } 
    } catch (error) {
      console.error(err);
    }
  });
}

cat(process.argv[2]);