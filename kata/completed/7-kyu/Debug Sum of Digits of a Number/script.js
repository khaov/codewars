// Solution:

function getSumOfDigits(integer) {
  return Math.floor(integer).toString().split('')
             .reduce((sum, num) => sum += Number(num), 0);
}

// Sample Tests:

getSumOfDigits(123) // 6
getSumOfDigits(223) // 7
getSumOfDigits(0)   // 0
