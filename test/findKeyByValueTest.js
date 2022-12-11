const assertEquals = require("../assertEquals");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEquals(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEquals(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);