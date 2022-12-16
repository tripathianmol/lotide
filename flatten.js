// Flattens a nested array up to one level deep.
const flatten = function(array) {
  let result = [];
    
  for (let i = 0; i < array.length; i++) {
    if (array[i].isArray) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
      continue;
    }
    result.push(array[i]);
  }
 
  return result;
};

module.exports = flatten;