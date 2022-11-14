// Solution:

function isPerfect(n) {
  if(n === 1) {
    return false;
 };

 let sum = 1;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      sum = sum + i + n / i;
      if(sum > n) {
        return false;
      }
    }
  }

  return sum === n;
}

// Sample Tests:

isPerfect(6)            // true
isPerfect(1)            // false
isPerfect(28)           // true
isPerfect(4986)         // false
isPerfect(10)           // false
isPerfect(496)          // true
isPerfect(8128)         // true
isPerfect(23459879034)  // false
isPerfect(1098)         // false
isPerfect(33550336)     // true
