/**
 * 冒泡排序
 * 时间复杂度为 O(N²)
 * 从右向左将较小的元素冒泡
 */

function bubbleSort (arr) {
  let len = arr.length;
  // 从右往左冒泡
  for (let i = 1; i < len; ++i) {
    for (let j = len - 1; j >= i; --j) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;