// Solution:

function isAllPossibilities(x) {
  return [...Array(x.length)].map((_, i) => i).every(number => x.includes(number));
}

// Sample Tests:

isAllPossibilities([1,2,0,3])   // true
isAllPossibilities([0,1,2,2,3]) // false
isAllPossibilities([1,2,3,4])   // false
isAllPossibilities([0])         // true
