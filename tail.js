const tail = function(arr) {
  let returnArr = [];

  if (arr.length === 0 || arr.length === 1) {
    return returnArr;
  } else {
    for (let i = 1; i < arr.length; i++) {
      returnArr.push(arr[i]);
    }
    return returnArr;
  }
};

module.exports = tail;