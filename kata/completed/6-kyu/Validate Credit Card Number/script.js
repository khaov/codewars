// Solution:

function validate(n){
  return n.toString().split('')
              .map(digit => Number(digit))
              .reverse()
              .map((digit, index, array) => index % 2 !== 0 ? digit * 2 > 9 ? digit * 2 - 9 : digit * 2 : digit)
              .reduce((sum, digit) => sum += digit, 0) % 10 === 0;
}

// Sample Tests:

validate(123)   // false
validate(1)     // false
validate(2121)  // true
validate(1230)  // true
