// Solution:

function isPrime(str) {

// Prime number function

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

  if (str.toLowerCase().includes('prime')) {
    return true;
  } else {
    const numbers = str.replace(/[^\d]/g, ' ').split(' ');
      return numbers.some(n => n !== '' && isPrime(n));
  }
}

// Sample Tests:

isPrime('optimusprime') // true, 'A prime is present'
isPrime('11')           // true, 'A prime is present'
isPrime('4')            // false,'No prime has been found'
isPrime('starPrime')    // true, 'A prime is present'
isPrime('11aagghh4')    // true, 'A prime is present'
