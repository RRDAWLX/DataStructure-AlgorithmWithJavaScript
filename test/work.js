const assert = require('assert')
const calculator = require('../work/calculator')
const mergeJointIntervals = require('../work/merge-joint-intervals')

describe('Work', () => {
  describe('calculator', () => {
    let expressions = [
      {
        str: '1+2×3÷(10-4)',
        infix: [1, '+', 2, '×', 3, '÷', '(', 10, '-', 4, ')'],
        postfix: [1, 2, 3, '×', 10, 4, '-', '÷', '+'],
        result: 2,
      },
    ]

    for (let i = 0, len = expressions.length; i < len; i++) {
      let expression = expressions[i]
      let infixResult = JSON.stringify(calculator.parseIntoInfix(expression.str))
      let expectedInfix = JSON.stringify(expression.infix)
      it(`infix result ${infixResult} should be ${expectedInfix}: `, () => {
        assert.equal(infixResult, expectedInfix)
      })

      let postfixResult = JSON.stringify(calculator.tranformInfixToPostfix(expression.infix))
      let expectedPostfix = JSON.stringify(expression.postfix)
      it(`postfix result ${postfixResult} should be ${expectedPostfix}: `, () => {
        assert.equal(postfixResult, expectedPostfix)
      })

      let calculateResult = calculator.calculate(expression.postfix)
      it(`calculate result ${calculateResult} should be ${expression.result}: `, () => {
        assert.equal(calculateResult, expression.result)
      })
      
      let calcResult = calculator.calc(expression.str)
      it(`calc result ${calcResult} should be ${expression.result}: `, () => {
        assert.equal(calcResult, expression.result)
      })
    }
  })

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