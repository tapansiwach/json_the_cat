const request = require("request");

const apiEndpoint = "https://api.thecatapi.com/v1/breeds/search";
const breedName = process.argv.slice(2)[0];
const apiUrl = `${apiEndpoint}?name=${breedName}`;

request(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("breed not found");
    return;
  }

  console.log(data[0].description);

});