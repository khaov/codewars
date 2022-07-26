// Solution:

function isTriangle(a,b,c) {
  return a + b > c && a + c > b && b + c > a;
}

// Sample Tests:

isTriangle(1,2,2) // true
isTriangle(7,2,2) // false
