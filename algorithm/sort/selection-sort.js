/**
 * 选择排序
 * 时间复杂度为 O(N²)
 * 每次循环选出最小值放到数组最前面
 */

function selectionSort (arr) {
  let i, j, len, min, temp;
  for (i = 1, len = arr.length; i < len; ++i) {
    min = i - 1;

    for (j = i; j < len; ++j) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i - 1) {
      temp = arr[i - 1];
      arr[i - 1] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

module.exports = selectionSort;