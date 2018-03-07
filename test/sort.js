const assert = require('assert');
const {quickSort} = require('../algorithms/sort/index.js');

let arr = [];
for(var i = 0; i < 10; i++){
	arr[i] = Math.floor(Math.random() * 100);
}
let sortedArr = arr.slice();
sortedArr.sort((a, b) => {
	return a - b;
});

describe('Sort', () => {
	describe('.quickSort()', () => {
		it(`should sort the array as [${sortedArr}].`, () => {
			let testArr = arr.slice();
			quickSort(testArr);
			assert.deepEqual(testArr, sortedArr);
		})
	});
});
