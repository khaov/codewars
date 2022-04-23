// Solution:

function isOddHeavy(n) {
  let oddArray = [];
  let evenArray = [];

  n.forEach(number => number%2 !== 0 ? oddArray.push(number) : evenArray.push(number));
  return !oddArray.length ? false : evenArray.every(number => number < oddArray.sort((prev, next) => prev - next)[0]);
}

// Sample Tests:

isOddHeavy([0,2,19,4,4])    // true
isOddHeavy([1,-2,-1,2])     // false
isOddHeavy([11,4,9,2,8])    // true
isOddHeavy([11,4,9,2,3,10]) // false
