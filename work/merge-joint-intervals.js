/**
 * 合并相交的区间。
 * @param {Array} intervals 区间列表，例如 [[1, 4], [5, 8], [3, 6], [10, 14]]。
 * @returns {Array} 合并后的区间列表，例如 [[1, 8], [10, 14]]。
 */
function mergeJointIntervals (intervals) {
  intervals = intervals.slice()

  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (isJoint(intervals[i], intervals[j])) {
        intervals[i] = mergeTwoIntervals(intervals[i], intervals[j])
        intervals.splice(j, 1)
        j = i
      }
    }
  }

  return intervals
}

/**
 * 判断两个区间是否相交。
 * @param {Array} interval1 代表区间数组
 * @param {Array} interval2 代表区间数组
 * @returns {Boolean}
 */
function isJoint (interval1, interval2) {
  return Math.max(interval1[0], interval2[0]) <= Math.min(interval1[1], interval2[1])
}

/**
 * 合并两个区间。
 * @param {Array} interval1 代表区间数组
 * @param {Array} interval2 代表区间数组
 * @returns {Array} 合并后的区间
 */
function mergeTwoIntervals (interval1, interval2) {
  return [
    Math.min(interval1[0], interval2[0]),
    Math.max(interval1[1], interval2[1])
  ]
}

module.exports = mergeJointIntervals