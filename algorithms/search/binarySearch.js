function binarySearch (arr, val) {
  let len = arr.length,
    left = 0,
    right = len - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val){
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

module.exports = binarySearch;