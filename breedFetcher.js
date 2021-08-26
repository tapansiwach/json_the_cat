const request = require("request");

const apiEndpoint = "https://api.thecatapi.com/v1/breeds/search";

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `${apiEndpoint}?name=${breedName}`;

  request(apiUrl, (err, response, body) => {

    if (err) {
      callback(err, null);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, null);
      return;
    }

    const description = data[0].description;
    callback(null, description);

  });

};

module.exports = { fetchBreedDescription };