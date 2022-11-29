const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  let obj1Keys = Object.keys(obj1);
  
  for (let key of obj1Keys) {
    if (obj2[key]) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};

let testObj1 = {key1: "hello", key2: "hi"};
let testObj2 = {key1: "hello", key2: "hi"};
let testObj3 = {key1: "helloo", key2: "hii"};
let testObj4 = {key1: ["str1", 2], key2: ["str2", 3]};
let testObj5 = {key1: ["str1", 2], key2: ["str2", 3]};
let testObj6 = {key1: ["str1", 3], key2: ["str2", 4]};


console.log(eqObjects(testObj1, testObj2));
console.log(eqObjects(testObj1, testObj3));
console.log(eqObjects(testObj4, testObj5));
console.log(eqObjects(testObj4, testObj6));