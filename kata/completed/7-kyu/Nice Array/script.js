// Solution:

function isNice(arr) {
  if (arr.length !== 0 ) {
    return arr.every(num => arr.includes(num + 1) || arr.includes(num - 1));
  } else {
    return false;
  }
}

// Sample Tests:

isNice([2,10,9,3])  // true
isNice([3,4,5,7])   // false
isNice([])          // false
