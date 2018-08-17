/**
 * 归并排序
 * 时间复杂度为 O(NlogN)
 * 自底向上的归并排序，采用循环来实现，从而避免递归方式对内存消耗过多的问题。
 * 将相邻的两个含1个元素的子数组合并排序成一个含2个元素的子数组。
 * 将相邻的两个含2个元素的子数组合并排序成一个含4个元素的子数组。
 * 依此类推。
 * 最后一个子数组的数量可能不满足以上要求，需做特殊处理。
 */

function mergeSort (arr) {
  let len = arr.length,
    step = 1,
    left;

  while (step < len) {
    left = 0;
    while (left + step < len) {
      mergeSubArrays(arr, left, left + step - 1, left + step, Math.min(left + 2 * step, len) - 1);
      left += 2 * step;
    }
    step *= 2;
  }

  return arr;
}

function mergeSubArrays (arr, leftStart, leftStop, rightStart, rightStop) {
  let arrLeft = arr.slice(leftStart, leftStop + 1),
    arrRight = arr.slice(rightStart, rightStop + 1),
    leftLen = arrLeft.length,
    rightLen = arrRight.length,
    leftCurrent = 0,
    rightCurrent = 0;

  while (leftCurrent < leftLen && rightCurrent < rightLen) {
    if (arrLeft[leftCurrent] < arrRight[rightCurrent]) {
      arr[leftStart] = arrLeft[leftCurrent];
      leftStart++;
      leftCurrent++;
    } else {
      arr[leftStart] = arrRight[rightCurrent];
      leftStart++;
      rightCurrent++;
    }
  }

  while (leftCurrent < leftLen) {
    arr[leftStart] = arrLeft[leftCurrent];
    leftStart++;
    leftCurrent++;
  }

  while (rightCurrent < rightLen) {
    arr[leftStart] = arrRight[rightCurrent];
    leftStart++;
    rightCurrent++;
  }
}

module.exports = mergeSort;