// Solution:

const primePrimes = n => {

  function isPrime(n) {
    let result = true;
    if (n <= 1) {
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
  }

  let primes = [];
  let primePrimes = [];

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  primes.forEach(function(number, index, array) {
    for (let i = index + 1; i < array.length; i++) {
      primePrimes.push(number/array[i])
    }
  });



  return [primePrimes.length, primePrimes.length > 0 ? Math.trunc(primePrimes.reduce((sum, num) => sum += num)) : 0]
};

// Sample Tests:

primePrimes(6) // [3, 1]
