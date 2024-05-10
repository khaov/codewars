// Solution:

function getNumberOfSquares(n) {
  let sum = 0;
  let counter = 0;

  while (sum < n) {
    sum += Math.pow(counter, 2);
    counter++;
  }

  return counter - 2;
}

// Sample Tests:

getNumberOfSquares(1)   // 0
getNumberOfSquares(2)   // 1
getNumberOfSquares(5)   // 1
getNumberOfSquares(6)   // 2
getNumberOfSquares(15)  // 3
