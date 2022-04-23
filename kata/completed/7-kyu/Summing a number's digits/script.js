// Solution:

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(
    (sum, num) => sum += Number(num) , 0
  );
}

// Sample Tests:

sumDigits(10)   // 1
sumDigits(99)   // 18
sumDigits(-32)  // 5
