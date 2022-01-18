const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [5, 3, 7, 6] for tail([2, 5, 3, 7, 6]", () => {
    assert.deepEqual(tail([2, 5, 3, 7, 6]), [5, 3, 7, 6]);
  });

  it("returns [20, 30, 40] for tail([10, 20, 30, 40])", () => {
    assert.deepEqual(tail([2, 5, 3, 7, 6]), [5, 3, 7, 6]);
  });

  it("returns [20, 30, 40] for tail([10, 20, 30, 40])", () => {
    assert.deepEqual(tail([2, 5, 3, 7, 6]), [5, 3, 7, 6]);
  });

  it("returns [] for tail([1)", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("[5, 3, 7, 6] is not equal to [2, 2, 2, 2]", () => {
    assert.notDeepEqual(tail([2, 5, 3, 7, 6]), [2, 2, 2, 2]);
  });

});

