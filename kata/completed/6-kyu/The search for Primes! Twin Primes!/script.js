// Solution:

function twinPrime(n) {
  let primes = [];
  let twinPrimes = [];

  // Prime number function

  function isPrime(number) {
    let result = true;

    if (number === 0 || number === 1) {
      result = false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          result = false;
          break;
        }
      }
    }

    return result;
  }

  // Prime numbers

  for (let i = 2; i <= n; i++) {
    if (isPrime(i) === true) {
      primes.push(i);
    }
  }

  // Prime numbers pairs

  primes.forEach(function(number, index, array) {
    if (array[index + 1] - number === 2) {
      twinPrimes.push(number, array[index + 1]);
    }
  });

  twinPrimes = twinPrimes.length / 2;

  // Twin primes wrap

  if (n > 0 && isPrime(n - 1) === true && isPrime(n + 1) === true) {
    twinPrimes++
  }

  return twinPrimes;
}

// Sample Tests:

twinPrime(-25)  // 0
twinPrime(0)    // 0
twinPrime(1)    // 0
twinPrime(2)    // 0
twinPrime(10)   // 2
twinPrime(11)   // 2
twinPrime(12)   // 3
twinPrime(15)   // 3
twinPrime(25)   // 4
