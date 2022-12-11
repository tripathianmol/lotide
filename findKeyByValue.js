const findKeyByValue = (obj, val) => {
  let result = undefined;
  
  for (let key in Object.keys(obj)) {
    if (obj[key] === val) {
      result = key;
      break;
    }
  }

  return result;
};

module.exports = findKeyByValue;

