// Solution:

function makeNegative(num) {
  return num <= 0 ? num : -num;
}

// Sample Tests:

makeNegative(42)   // return -42
makeNegative(1)    // return -1
makeNegative(-5)   // return -5
makeNegative(0)    // return 0
makeNegative(0.12) // return -0.12
