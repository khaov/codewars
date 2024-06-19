// Solution:

function evenLast(numbers) {
  return numbers.filter((numder, index) => index % 2 === 0)
         .reduce((sum, numder) => sum += numder * numbers[numbers.length - 1], 0)
}

// Sample Tests:

evenLast([2, 3, 4, 5]) // 30
