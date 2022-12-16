// Returns the first element of the array. If array is empty, then it returns undefined.
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};

module.exports = head;