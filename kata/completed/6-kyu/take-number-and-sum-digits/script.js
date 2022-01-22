// Solution:

function sumDigPow(a, b) {
  let resultNumbers = [];
  for (let number = a; number <= b; number++ ) {
    if (number < 10 || number >= 89) {
      const numberDigitsSum = number.toString().split('').reduce(function(sum, item, index) {
        return sum + Math.pow(item, index+1);
      }, 0);
      if (numberDigitsSum === number) {
        resultNumbers.push(number);
      }
    }
  }
  return resultNumbers;
}

// Sample Tests:

sumDigPow(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
sumDigPow(10, 100) //  [89]
sumDigPow(90, 100) // []
sumDigPow(90, 150) // [135]
sumDigPow(50, 150) // [89, 135]
sumDigPow(10, 150) // [89, 135]
