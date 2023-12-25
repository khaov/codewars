// Solution:

function hammingWeight(x) {
  return x ? x % 2 + hammingWeight(x >> 1) : x;
}

// Sample Tests:

hammingWeight(10) // 2
hammingWeight(21) // 3
