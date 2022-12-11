const assertEquals = require("../assertEquals");
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
assertEquals(result1["Jason"], 1);
assertEquals(result1["Karima"], undefined);
assertEquals(result1["Fang"], 2);
assertEquals(result1["Agouhanna"], undefined);