const eqArrays = require("./eqArrays");

// Returns true if two objects are identical.
const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  let obj1Keys = Object.keys(obj1);
  
  for (let key of obj1Keys) {
    // Checks if a value for a key in object 1 exists in object 2.
    if (obj2[key]) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;