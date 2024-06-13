// Solution:

function squareUp(n) {
  const base = Array(n).fill(0);
  let sequence = [];
  const pattern = [];

  for (let i = n; i > 0; i--) {
    sequence.push(i);
  }

  for (let i = n; i >= 0; i--) {
    pattern.push(base.slice(0, i).concat(sequence.slice(i)))
  }

  return [].concat(...pattern.filter(item => !item.every(v => v===0)))
}

// Sample Tests:

squareUp(4) // [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
squareUp(9) // [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5, 4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]
squareUp(1) // [1]
