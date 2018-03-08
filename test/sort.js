const assert = require('assert');
const {bubbleSort, quickSort, selectionSort} = require('../algorithms/sort/index.js');

let arr = [];
for(var i = 0; i < 10; i++){
	arr[i] = Math.floor(Math.random() * 100);
}
let sortedArr = arr.slice();
sortedArr.sort((a, b) => {
	return a - b;
});

describe(`Sort: [${arr}]`, () => {
	describe('.bubbleSort()', () => {
		let arr2 = bubbleSort(arr.slice());
		it(`result: [${arr2}]`, () => {
			assert.deepEqual(bubbleSort(arr.slice()), sortedArr);
		});
	});

	describe('.quickSort()', () => {
		let arr2 = quickSort(arr.slice());
		it(`result: [${arr2}]`, () => {
			assert.deepEqual(arr2, sortedArr);
		});
	});

	describe('.selectionSort()', () => {
		let arr2 = selectionSort(arr.slice());
		it(`result: [${arr2}]`, () => {
			assert.deepEqual(arr2, sortedArr);
		});
	});
});
