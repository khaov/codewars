// Solution:

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Sample Tests:

simpleMultiplication(2) // 16
simpleMultiplication(1) // 9
simpleMultiplication(8) // 64
simpleMultiplication(4) // 32
simpleMultiplication(5) // 45
