const assert = require('assert');
const {
  binarySearch,
  sequentialSearch
} = require('../algorithms/search');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  val1 = 8,
  val2 = 0;

describe(`Search in [${arr}]`, () => {
  describe(`.binarySearch()`, () => {
    it(`can find ${val1}`, () => {
      assert.ok(binarySearch(arr, val1) >= 0);
    });

    it(`can not find ${val2}`, () => {
      assert.ok(binarySearch(arr, val2) === -1);
    });
  });

  describe(`.sequentialSearch()`, () => {
    it(`can find ${val1}`, () => {
      assert.ok(sequentialSearch(arr, val1) >= 0);
    });

    it(`can not find ${val2}`, () => {
      assert.ok(sequentialSearch(arr, val2) === -1);
    });
  });
});