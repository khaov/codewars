// Solution:

function sort(initialArray, sortingArray) {
  return initialArray.sort((prev, next) => 
    sortingArray[initialArray.indexOf(prev)] - sortingArray[initialArray.indexOf(next)]
  );
}

// Sample Tests:

sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])  // [1, 3, 2, 5, 4]
sort(['z', 'x', 'y'], [0, 2, 1])        // ['z', 'y', 'x']
sort(['x', 'y', 'z'], [1, 2, 0])        // ['z', 'x', 'y']