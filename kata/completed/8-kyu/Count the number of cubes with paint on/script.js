// Solution:

function countSquares(cuts) {
  return (cuts ? 6 * Math.pow(cuts, 2) + 2 : 1);
}

// Sample Tests:

countSquares(5)   // 152
countSquares(16)  // 1538
countSquares(23)  // 3176
