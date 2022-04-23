// Solution:

function sortArray(array) {

  let evenArray = []
  let oddArray  = []

  array.forEach(function(number) {
    if (number%2 === 0) {
      evenArray.push(number)
    } else {
      oddArray.push(number)
      evenArray.push('')
    }
  });

  let sortedOddArray = oddArray.sort(function(a, b){
    return b - a
  });

  return evenArray.map(function(item){
    if (item === '') {
      return item = sortedOddArray.pop()
    } else {
      return item
    }
  });
}

// Sample Tests:

sortArray([5, 3, 2, 8, 1, 4])             // [1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0])                // [1, 3, 5, 8, 0]
sortArray([])                             // []
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
