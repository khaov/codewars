// Solution:

function arithmeticSequenceElements(a, d, n) {
  let sequence = [];
  let element = a;

  for (let i = 0; i < n; i++) {
    sequence.push(element);
    element += d;
  }

  return sequence.join(', ');
}

// Sample Tests:

arithmeticSequenceElements(1, 2, 5)       // "1, 3, 5, 7, 9"
arithmeticSequenceElements(1, 0, 5)       // "1, 1, 1, 1, 1"
arithmeticSequenceElements(1, -3, 10)     // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
arithmeticSequenceElements(100, -10, 10)  // "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"
