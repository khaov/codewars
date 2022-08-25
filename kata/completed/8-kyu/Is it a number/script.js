// Solution:

function isDigit(s) {
  return s == parseFloat(s)
}

// Sample Tests:

isDigit("s2324")  // false
isDigit("-234.4") // true
