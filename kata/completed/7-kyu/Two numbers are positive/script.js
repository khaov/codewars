// Solution:

function twoArePositive(a, b, c) {
  let integers  = [];
  integers.push(a, b, c);

  return integers.reduce((res, num) => num > 0 ? res += 1 : res, 0) === 2;
}

// Sample Tests:

twoArePositive(2, 4, -3)    // true,  '(2, 4, -3)'
twoArePositive(-4, 6, 8)    // true,  '(-4, 6, 8)'
twoArePositive(4, -6, 9)    // true,  '(4, -6, 9)'
twoArePositive(4, 6, 0)     // true,  '(4, 6, 0)'
twoArePositive(-4, 6, 0)    // false, '(-4, 6, 0)'
twoArePositive(4, 6, 10)    // false, '(4, 6, 10)'
twoArePositive(-14, -3, -4) // false, '(-14, -3, -4)'
