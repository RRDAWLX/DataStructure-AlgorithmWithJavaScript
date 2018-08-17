function sequentialSearch (arr, val) {
  for (let i = 0, len = arr.length; i < len; ++i) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

module.exports = sequentialSearch;