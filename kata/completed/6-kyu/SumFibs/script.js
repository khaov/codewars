// Solution:

function sumFibs(n) {
  const fibonacciArray = [0, 1];

  for(let i = 2; i <= n; i++) {
      fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
  }

  return fibonacciArray
    .filter(number => number % 2 === 0)
    .reduce((sum, number) => sum = sum + number);
};

// Sample Tests:

sumFibs(5)  // 2
sumFibs(9)  // 44
sumFibs(10) // 44
sumFibs(11) // 44
