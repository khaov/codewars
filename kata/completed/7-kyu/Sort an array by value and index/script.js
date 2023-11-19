// Solution:

function sortByValueAndIndex(array) {
  return array.map((value, index) => ({value, index: index + 1}))
              .sort((prev, next) => prev.value * prev.index - next.value * next.index)
              .map(({value}) => value);
}

// Sample Tests:

sortByValueAndIndex([ 1, 2, 3, 4, 5 ]) // [ 1, 2, 3, 4, 5 ]
sortByValueAndIndex([ 23, 2, 3, 4, 5 ]) // [ 2, 3, 4, 23, 5 ]
sortByValueAndIndex([ 26, 2, 3, 4, 5 ]) // [ 2, 3, 4, 5, 26 ]
sortByValueAndIndex([ 9, 5, 1, 4, 3 ]) // [ 1, 9, 5, 3, 4 ]
