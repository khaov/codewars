// Solution:

function isLucky(n) {
  const number = n.toString().split('').reduce((sum, num) => sum += Number(num), 0)
  return number % 9 === 0;
}

// Sample Tests:

isLucky(1892376)  // true
isLucky(189237)   // false
isLucky(1098)     // true
isLucky(22869)    // true
isLucky(0)        // true
