const eqObjects = require("../eqObjects");

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