const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢 Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed`);
  }
};

const flatten = function(array) {
/*     for (let i = 0; i < array.length; i++) {
        if (array[i].isArray) {
            for (let j = array[i].length - 1; j >= 0; j--) {
                array.splice(i , 0, array[i][j]);
            }
        }
    }
 */
  return array.flat();
};

console.log(flatten([1, 2, [4, 3]]));