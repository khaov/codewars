// Solution:

function generatePairs(m, n) {
  let pairs = [];

  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      pairs.push([i, j])
    }
  }

  return pairs;
}

// Sample Tests:

generatePairs(2, 4) // [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]
