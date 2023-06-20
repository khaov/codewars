// Solution:

function primeFactors(n) {
  let integer = n;
  let factors = [];

  for (let divider = 2; divider <= integer; divider++) {
    while (integer % divider === 0) {
      factors.push(divider);
      integer /= divider;
    } 
  }

	return factors;
}

// Sample Tests:

primeFactors(1)   // []
primeFactors(3)   // [3]
primeFactors(8)   // [2, 2, 2]
primeFactors(9)   // [3, 3]
primeFactors(12)  // [2, 2, 3]
