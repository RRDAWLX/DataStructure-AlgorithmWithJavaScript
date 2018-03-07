const {quickSort} = require('../algorithms/sort/index.js');

let arr = [];
for(var i = 0; i < 10; i++){
	arr[i] = Math.floor(Math.random() * 100);
}

let arr2 = [];
console.log('initial: ', arr);

arr2 = arr.slice();
quickSort(arr2);
console.log('quick sort: ', arr2);
