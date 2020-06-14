const operators = [
  { operator: '+', priority: 0 },
  { operator: '-', priority: 0 },
  { operator: '×', priority: 1 },
  { operator: '÷', priority: 1 },
  { operator: '(', priority: 2 },
  { operator: ')', priority: 2 },
]
const priorities = operators.reduce((obj, item) => {
  obj[item.operator] = item.priority
  return obj
}, {})

function parseIntoInfix (expression) {
  let infix = []
  let num = ''

  for (let i = 0, len = expression.length; i < len; i++) {
    let charCode = expression.charCodeAt(i)

    // 数字 code 在 48 至 57 之间，小数点的 code 为 46。
    if ((charCode >= 48 && charCode <= 57) || charCode === 46) {
      num += expression[i]
    } else {
      num && infix.push(+num)
      infix.push(expression[i])
      num = ''
    }
  }

  num && infix.push(+num)
  return infix
}

function tranformInfixToPostfix (infix) {
  let postfix = []
  let operators = []
  
  for (let i = 0, len = infix.length; i < len; i++) {
    let slice = infix[i]

    if (typeof slice === 'number') {
      postfix.push(slice)
    } else {
      if (slice === ')') {
        while (operators.length) {
          let operator = operators.pop()

          if (operator === '(') {
            break
          } else {
            postfix.push(operator)
          }
        }  
      } else {
        while (operators.length) {
          let operator = operators.pop()

          if (operator === '(' || priorities[operator] < priorities[slice]) {
            operators.push(operator)
            break
          } else {
            postfix.push(operator)
          }
        }

        operators.push(slice)
      }
    }
  }

  while (operators.length) {
    postfix.push(operators.pop())
  }

  return postfix
}

function calculate (postfix) {
  let stack = []

  for (let i = 0, len = postfix.length; i < len; i++) {
    let slice = postfix[i]

    if (typeof slice === 'number') {
      stack.push(slice)
    } else {
      let num2 = stack.pop()
      let num1 = stack.pop()

      switch (slice) {
        case '+':
          stack.push(num1 + num2)
          break;
        
        case '-':
          stack.push(num1 - num2)
          break;
        
        case '×':
          stack.push(num1 * num2)
          break;
        
        case '÷':
          stack.push(num1 / num2)
          break;
      }
    }
  }

  return stack.pop()
}

function calc (expression) {
  return calculate(tranformInfixToPostfix(parseIntoInfix(expression)))
}

module.exports = {
  parseIntoInfix,
  tranformInfixToPostfix,
  calculate,
  calc,
}