// Solution:

Number.prototype.palindromeBelow = function(base){
  let palindromes = [];

  for (let n = 1; n < this; n++) {
    if (n.toString(base).split('').reverse().join('') === n.toString(base)) {
      palindromes.push(n);
    }
  }

  return palindromes;
}

// Sample Tests:

4..palindromeBelow(2)   // [1,3]
15..palindromeBelow(10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
