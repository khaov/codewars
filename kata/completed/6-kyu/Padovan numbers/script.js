// Solution:

function padovan(n) {
  let padovanNumbers = [1, 1, 1];

  for (let i = 3; i <=n; i++) {
    padovanNumbers.push(padovanNumbers[i-2] + padovanNumbers[i-3])
  }

  return padovanNumbers.pop();
}

// Sample Tests:

padovan(9) // 9
