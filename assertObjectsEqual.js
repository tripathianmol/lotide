const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  let obj1Keys = Object.keys(obj1);
  
  for (let key of obj1Keys) {
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

const assertObjectsEqual = function(obj1, obj2) {
  if (eqObjects(obj1, obj2)) {
    console.log(`🟢🟢🟢 Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed`);
  }
};