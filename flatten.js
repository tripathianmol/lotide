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

module.exports = flatten;