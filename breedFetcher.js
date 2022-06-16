const request = require('request');

const args = process.argv;

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const catBreed = args[2];


const breedFetcher = function(callback) {
  
  request(URL + catBreed, function(err, resp, body) {
    console.log('error: ', err);
    console.log('statusCode: ',resp && resp.statusCode);
    if (!err) callback(body);
  });
  
};

const breedIsReal = function(d) {
  
  const data = JSON.parse(d);

  if (d.length <= 2) {
    console.log("That breed doesn't exist, try again");
  } else {
    console.log(data[0].description);
  }
};

breedFetcher(breedIsReal);