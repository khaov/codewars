// Solution:

function backwardsPrime(start, stop){
  let primes = [];

  // Default prime number function

  function checkPrime(number) {
    let prime = true;

    if (number === 0 || number === 1) {
      prime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
              prime = false;
              break;
            }
        }
    }

    return prime;
  }

  for (let n = start; n <= stop; n++) {
    let forwardNumber = n;
    let backwardNumber = Number(forwardNumber.toString().split('').reverse('').join(''))
    if (forwardNumber !== backwardNumber) {
      if (checkPrime(forwardNumber) === true && checkPrime(backwardNumber) === true) {
        primes.push(n);
      }
    }
  }

  return primes.sort((prev, next) => prev -next);
}

// Sample Tests:

backwardsPrime(2, 100)      // [13, 17, 31, 37, 71, 73, 79, 97]
backwardsPrime(9900, 10000) // [9923, 9931, 9941, 9967]
backwardsPrime(501, 599)    // []
