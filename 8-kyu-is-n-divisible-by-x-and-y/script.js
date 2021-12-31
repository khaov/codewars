// Solution:

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

// Sample Tests:

isDivisible(3,3,4) // false
isDivisible(12,3,4) // true
isDivisible(8,3,4) // false
isDivisible(48,3,4) // true
