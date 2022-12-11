const assert = require('chai').assert;
const middle = require('../middle');
const eqArrays = require('../eqArrays');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.isTrue(eqArrays(middle([1, 2, 3]), [2]));
  });
});