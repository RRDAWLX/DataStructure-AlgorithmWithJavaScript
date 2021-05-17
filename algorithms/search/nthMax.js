/**
 * 寻找无序数组中第 n 大值。
 * @param {number[]} arr 无序数组
 * @param {number} n 要寻第几大
 */
function nthMax (arr, n) {
  let sorted = []

  for (let item of arr) {
    sorted.push(item)
    let i = sorted.length - 2

    while (i >= 0) {
      if (sorted[i] >= item) {
        break
      }

      sorted[i + 1] = sorted[i]
      i--
    }

    sorted[i + 1] = item

    if (sorted.length > n) {
      sorted.pop()
    }
  }

  return sorted.pop()
}

module.exports = nthMax