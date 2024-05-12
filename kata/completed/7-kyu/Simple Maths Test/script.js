// Solution:

function numberProperty(n) {

  // is the number prime?

  function isPrime(number) {
    if (number >= 0) {
      let result = true;

      if (n === 0 || n === 1) {
          result = false;
      } else {
          for (let i = 2; i < n; i++) {
              if (n % i === 0) {
                  result = false;
                  break;
              }
          }
      }
      return result;
    } else {
      return false;
    }
  }

  // is the number even?

  function isEven(number) {
    return number % 2 === 0;
  }

  // is the number a multiple of 10?

  function isMultiple(number) {
    return number % 10 === 0
  }

  return [isPrime(n), isEven(n), isMultiple(n)]
}

// Sample Tests:

numberProperty(  0) // [false,  true,  true], "n = 0"
numberProperty(  1) // [false, false, false], "n = 1"
numberProperty(  2) // [ true,  true, false], "n = 2"
numberProperty( -2) // [false,  true, false], "n = -2"
numberProperty(  4) // [false,  true, false], "n = 4"
numberProperty(  5) // [ true, false, false], "n = 5"
numberProperty( 10) // [false,  true,  true], "n = 10"
numberProperty(-10) // [false,  true,  true], "n = -10"
numberProperty( 25) // [false, false, false], "n = 25"
numberProperty(131) // [ true, false, false], "n = 131"
numberProperty(341) // [false, false, false], "n = 341"
