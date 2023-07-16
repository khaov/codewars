// Solution:

function powerOf4(n) {
  return typeof n === "number" ?
         Number.isInteger(Math.log(n) /  Math.log(4)):
         false;
}

// Sample Tests:

powerOf4(4)             // true
powerOf4(16)            // true, "4^4 = 16"
powerOf4(1)             // true, "Four to the power of 0 is 1"
powerOf4(20)            // false, "20 is not a power of 4"
powerOf4(44)            // false, "44 is not a power of 4"
powerOf4(3.1415)        // false
powerOf4("1")           // false, "Should return false for strings"
powerOf4("4")           // false, "Should return false for strings"
powerOf4(null)          // false, "Should return false for non-numbers"
powerOf4(undefined)     // false, "Should return false for non-numbers"
powerOf4(function() {}) // false, "Should return false for non-numbers"
