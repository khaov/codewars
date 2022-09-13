// Solution:

function geometricSequenceElements(a, r, n) {
  let sequence = [a];

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[sequence.length -1] * r);
  }

  return sequence.join(', ');
}

// Sample Tests:

geometricSequenceElements(2, 3, 5)    // '2, 6, 18, 54, 162'
geometricSequenceElements(2, 2, 10)   // '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024'
geometricSequenceElements(1, -2, 10)  // '1, -2, 4, -8, 16, -32, 64, -128, 256, -512'
