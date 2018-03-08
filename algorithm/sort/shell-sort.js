/**
 * 希尔排序
 * 时间复杂度与所采用的增量序列算法相关，此处采用 Gonnet 增量序列算法。
 * 数组长度为 n 是数组分成 n/gap 个项与项之间间隔为 gap 的子数组;
 * 对子数组进行插入排序；
 * 不断减小 gap 再排序，当 gap 为 1 的排序完成后，数组排序完成。
 */

function shellSort (arr) {
  let len = arr.length,
    gap = Math.floor(len / 2.2),
    i,
    j,
    temp;

  while (true) {
    if (gap < 1) {
      gap = 1;
    }

    for (i = gap; i < len; ++i) {
      j = i;
      temp = arr[i];
      while (j >= gap && temp < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }

    if (gap == 1) {
      break;
    }

    gap = Math.floor(gap / 2.2);
  }

  return arr;
}

module.exports = shellSort;