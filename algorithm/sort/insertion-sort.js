/**
 * 插入排序
 * 时间复杂度为 O(N²)
 * 数组左边部分已排序，右边部分未排序；
 * 每次循环提取右边未排序部分最左边的元素，将其插入到左边已排序部分中。
 */

function insertionSort (arr) {
  let i, j, len, temp;
  for (i = 1, len = arr.length; i < len; ++i) {
    j = i;
    temp = arr[j];
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      --j;
    }
    arr[j] = temp;
  }

  return arr;
}

module.exports = insertionSort;