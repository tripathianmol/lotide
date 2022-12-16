// Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
let findKey = function(obj, cb) {
  let result = "";

  for (let key in Object.keys(obj)) {
    if (cb(obj[key])) {
      result = key;
      break;
    }
  }

  return result;
};

module.exports = findKey;