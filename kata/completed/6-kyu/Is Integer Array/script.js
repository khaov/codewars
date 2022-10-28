// Solution:

function isIntArray(arr) {
  return arr ?
         arr.every(element => Number.isInteger(element)) ? true : false :
         false
}

// Sample Tests:

isIntArray([])              // true, "Input: []"
isIntArray([1, 2, 3, 4])    // true, "Input: [1, 2, 3, 4]"
isIntArray([1, 2, 3, NaN])  // false, "Input: [1, 2, 3, NaN]"
