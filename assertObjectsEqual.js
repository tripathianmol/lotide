const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(obj1, obj2) {
  if (eqObjects(obj1, obj2)) {
    console.log(`🟢🟢🟢 Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed`);
  }
};

module.exports = assertObjectsEqual;