// Solution:

function differenceOfSquares(n){
  let sumOfNumbers = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; i++) {
    sumOfNumbers += i;
    sumOfSquares += Math.pow(i, 2);
  }

  return Math.pow(sumOfNumbers, 2) - sumOfSquares;
}

// Sample Tests:

differenceOfSquares(5)    // 170
differenceOfSquares(10)   // 2640
differenceOfSquares(100)  // 25164150
