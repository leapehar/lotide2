const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns [] for middle([1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for middle([1, 2]))", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for middle([1, 2, 3])", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for middle([1, 2, 3, 4, 5])", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2,3] for middle([1, 2, 3, 4])", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [42] for middle([10, 22, 35, 42, 5000, 32, 53]))", () => {
    assert.deepEqual(middle([10, 22, 35, 42, 5000, 32, 53]), [42]);
  });

  it("[42] does not equal [100]", () => {
    assert.notDeepEqual(middle([10, 22, 35, 42, 5000, 32, 53]), [100]);
  });

  it("[42] does not equal [42,42]", () => {
    assert.notDeepEqual(middle([10, 22, 35, 42, 5000, 32, 53]), [42, 42]);
  });

  it("returns [] which does not equal [1])", () => {
    assert.notDeepEqual(middle([1]), [1]);
  });

  it("returns [] which does not equal [1,2])", () => {
    assert.notDeepEqual(middle([1, 2]), [1, 2]);
  });

});

