const assertArraysEqual = require("../assertArraysEqual");
const flatten = require("../flatten");


assertArraysEqual(flatten([1, 2, [4, 3]]), [1, 2, 4, 3]);