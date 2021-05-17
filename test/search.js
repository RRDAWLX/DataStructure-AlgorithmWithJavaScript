const assert = require('assert');
const {
  binarySearch,
  nthMax,
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

  describe('.nthMax()', () => {
    let unsorted = arr.slice()
    unsorted.sort(() => (Math.random() - 0.5))
    it('can find 1st max number: 9', () => {
      assert.ok(nthMax(unsorted, 1) === 9)
    })

    unsorted.sort(() => (Math.random() - 0.5))
    it('can find 2nd max number: 8', () => {
      assert.ok(nthMax(unsorted, 2) === 8)
    })

    unsorted.sort(() => (Math.random() - 0.5))
    it('can find 3rd max number: 7', () => {
      assert.ok(nthMax(unsorted, 3) === 7)
    })
  })

  describe(`.sequentialSearch()`, () => {
    it(`can find ${val1}`, () => {
      assert.ok(sequentialSearch(arr, val1) >= 0);
    });

    it(`can not find ${val2}`, () => {
      assert.ok(sequentialSearch(arr, val2) === -1);
    });
  });
});