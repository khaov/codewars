// Solution:

function countRedBeads(n) {
  return n >= 2 ? (n -1) * 2 : 0;
}

// Sample Tests:

countRedBeads(0) // 0
countRedBeads(1) // 0
countRedBeads(3) // 4
countRedBeads(5) // 8
