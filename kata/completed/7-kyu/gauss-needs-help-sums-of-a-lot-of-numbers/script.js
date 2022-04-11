// Solution:

function f(n) {
  return typeof n === "number" && Number.isInteger(n) && n > 0 ? (1 + n) * (n /2) : false;
};

// Sample Tests:

f(100)    // 5050
f(300)    // 45150
f(50000)  // 1250025000
f('n')    // false, "n must be a number"
f()       // false, "n must be a value"
f(3.14)   // false, "n must be an integer"
f(0)      // false, "a value of n greater than 0 is required"
f(-10)    // false, "a positive value of n is required"
