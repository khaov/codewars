// Solution:

function isTwinPrime(n){

  // Prime number function

  function isPrime(number) {
    let result = true;

    if (number <= 1) {
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

  if (!isPrime(n)) {
    return false;
  } else {
    return (isPrime(n - 2) === true || isPrime(n + 2) === true);
  }
}

// Sample Tests:

isTwinPrime(5)    //  true
isTwinPrime(7)    //  true
isTwinPrime(9)    //  false
isTwinPrime(25)   //  false
isTwinPrime(953)  //  false
