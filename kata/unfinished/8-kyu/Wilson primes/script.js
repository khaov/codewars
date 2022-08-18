// Solution:

function amIWilson(p) {
  return (factorial(p-1) + 1) % Math.pow(p, 2) === 0;
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

// Sample Tests:

amIWilson(5)    // true
amIWilson(9)    // false
amIWilson(6)    // false

amIWilson(563)  // true
