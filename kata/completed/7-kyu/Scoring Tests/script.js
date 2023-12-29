// Solution:

function scoreTest(str, right, omit, wrong) {
  return str.filter(num => num === 0).length * right +
         str.filter(num => num === 1).length * omit -
         str.filter(num => num === 2).length * wrong
}

// Sample Tests:

scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)           // 9
scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2) // 3
