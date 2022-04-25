// Solution:

function xor(a, b) {
  return a === true &&  b !== true || a !== true &&  b === true;
}

// Sample Tests:

xor(false, false) // false, "false xor false === false"
xor(true, false)  // true,  "true xor false === true"
xor(false, true)  // true,  "false xor true === true"
xor(true, true)   // false, "true xor true === false"
