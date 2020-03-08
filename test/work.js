const assert = require('assert')
const mergeJointIntervals = require('../work/merge-joint-intervals')

describe('Work', () => {
  let intervals = [[1, 4], [5, 8], [3, 6], [10, 14], [10, 11], [18, 23]]
  let targetIntervals = [[1, 8], [10, 14], [18, 23]]
  describe(`merge joint intervals: ${JSON.stringify(intervals)}`, () => {
    let mergeIntervals = JSON.stringify(mergeJointIntervals(intervals))
    targetIntervals = JSON.stringify(targetIntervals)
    it(`result: ${mergeIntervals}`, () => {
      assert.equal(mergeIntervals, targetIntervals)
    })
  })
})