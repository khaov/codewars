// Solution:

function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}

// Sample Tests:

SeriesSum(1) // "1.00"
SeriesSum(2) // "1.25"
SeriesSum(3) // "1.39"
SeriesSum(4) // "1.49"
