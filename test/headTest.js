const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'HIIIIII' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.notStrictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'HIIIIII');
  });

  it("returns '5' for ['100, 6, 7']", () => {
    assert.notStrictEqual(head(['5']), '100');
  });

});

