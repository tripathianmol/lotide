const eqArrays = require("./eqArrays");

// Checks if two arrays are identical.
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢 Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed`);
  }
};

module.exports = assertArraysEqual;