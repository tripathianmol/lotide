// Returns a subset of the array until where the callback returns true.
const takeUntil = function(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      result.push(array[i]);
    } else {
      break;
    }
  }

  return result;
};

module.exports = takeUntil;