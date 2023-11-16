// Solution:

function isPrime(n) {
  let rt = Math.sqrt(n);

  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) {
      return false;
    }
  }

  return n !== 1;
}

function oddNotPrime(n){
  let oddNumbers = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }

  let notPrimeNumbers = [];

  for (let i=0; i<=oddNumbers.length;i++) {
    if (!isPrime(oddNumbers[i])) {
      notPrimeNumbers.push(oddNumbers[i]);
    }
  }

  return notPrimeNumbers.length;
}

// Sample Tests:

oddNotPrime(5)  // 1
oddNotPrime(10) // 2
oddNotPrime(99) // 26
oddNotPrime(9)  // 2
oddNotPrime(1)  // 1
