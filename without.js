// Return a subset of a given array, removing unwanted elements.
const without = function(arr1, arr2) {
  let arr1Copy = arr1;
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1Copy.length; j++) {
      if (arr2[i] === arr1Copy[j]) {
        arr1Copy.splice(j, 1);
        j--;
      }
    }
  }

  return arr1Copy;
};

module.exports = without;