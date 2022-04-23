// Solution:

function basicOp(operation, value1, value2) {

  operations = {
    '+' : value1 + value2,
    '-' : value1 - value2,
    '*' : value1 * value2,
    '/' : value1 / value2
  }

  return operations[operation]
}

// Sample Tests:

basicOp('+', 4, 7)    // 11
basicOp('-', 15, 18)  // -3
basicOp('*', 5, 5)    // 25
basicOp('/', 49, 7)   // 7
