let findKey = function (obj, cb) {
  let result = "";

  for (let key in Object.keys(obj)) {
    if (cb(obj[key])) {
      result = key;
      break;
    }
  }

  return result;
};