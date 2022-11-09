// Solution:

function reverseNumber(n) {
  const number = Number(Math.abs(n).toString().split('').reverse().join(''));
  return n >=0 ? number : -number;
}

// Sample Tests:

reverseNumber(123)      // 321
reverseNumber(-123)     // -321, 'Negative Numbers should be preserved'
reverseNumber(1000)     // 1, 'Should handle numbers ending with "0"'
reverseNumber(4321234)  // 4321234
reverseNumber(5)        // 5
reverseNumber(0)        // 0
reverseNumber(98989898) // 89898989
