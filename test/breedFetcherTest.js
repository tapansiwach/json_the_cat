// breedFetcherTest.js

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {

  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we don't expect an error in this case
      assert.equal(err, null);

      // expected description for Siberian is as below
      const expected = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(desc.trim(), expected);

      done();
    });
  });

  it("returns (via a callback) breed was not found if an unknown breed is requested", (done) => {
    fetchBreedDescription("sdsadfasdf", (err, desc) => {
      // we don't expect an error in this case
      assert.equal(err, null);

      // expected description for unknown breed is as below
      const expected = "breed not found";
      assert.equal(desc.trim(), expected);

      done();
    });
  });

});

