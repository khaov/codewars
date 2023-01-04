// Solution:

function sumEvenNumbers(input) {
  return input.reduce((sum, num) => num % 2 === 0 ? sum += num : sum, 0);
}

// Sample Tests:

sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 30
