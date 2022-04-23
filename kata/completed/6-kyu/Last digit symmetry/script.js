// Solution:

function solve(a, b) {
  let result = 0;
  let primes = [];

  // Primes list

  for (let i = 11; i <= 99; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i)
    }
  }

  // First two digits

  function firstDigits(number) {
    return Number(number.toString().slice(0,2));
  }

  // Last two digits

  function lastDigits(number) {
    return Number(number.toString().slice(number.toString().length-2));
  }

  for (let i = a; i < b; i++) {
    if (
      primes.includes(firstDigits(i)) &&
      primes.includes(firstDigits(Math.pow(i, 2))) &&
      lastDigits(i) === lastDigits(Math.pow(i, 2))
    ) {
      result++
    }
  }

  return result
}

// Sample Tests:

solve(2,1200)         // 1
solve(2,100000)       // 247
solve(2,1000000)      // 2549
solve(100000,1000000) // 2302
