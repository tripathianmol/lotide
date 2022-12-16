const eqObjects = require('./eqObjects');

// Logs whether two objects are identical.
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  
  if (eqObjects(obj1, obj2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(obj1)} = ${inspect(obj2)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(obj1)} != ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;