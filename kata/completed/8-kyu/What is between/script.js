// Solution:

function between(a, b) {
  let sequence = [];
  for (let i = a; i <= b; i++) {
    sequence.push(i);
  }
  return sequence;
}

// Sample Tests:

between(1, 4)   // [1, 2, 3, 4]
between(-2, 2)  // [-2, -1, 0, 1, 2]
