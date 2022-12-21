// Solution:

function maxBisectors(n) {
  return Math.floor(Math.pow(n, 2) / 4)
}

// Sample Tests:

maxBisectors(0);  // 0
maxBisectors(1);  // 0
maxBisectors(2);  // 1
maxBisectors(3);  // 2
maxBisectors(4);  // 4
maxBisectors(5);  // 6
maxBisectors(6);  // 9
maxBisectors(51); // 650
