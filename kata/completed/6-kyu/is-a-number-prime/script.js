// Solution:

function isPrime(num) {
  let prime = true;
  if (num <= 1){
    prime = false;
  } else {
    let n = Math.sqrt(num);
    for (let i = 2; i <= n; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    } 
  }
  return prime;
}

// Sample Tests:

//isPrime(0); //  false, "0 is not prime"
//isPrime(-1); // false, "-1 is not prime"
//isPrime(9); // false, "9 is not prime"
//isPrime(73); // true, "73 is prime"
//isPrime(75); // false, "75 is not prime"