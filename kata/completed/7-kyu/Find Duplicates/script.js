// Solution:

function duplicates(arr) {
  const repetitions = arr.filter((element, index, array) =>
              index !== array.indexOf(element) &&
              array.indexOf(element) !== array.lastIndexOf(element)
            );

  return repetitions.filter((element, index, array) =>
    index == array.indexOf(element)
  );
}

// Sample Tests:

duplicates([1, 2, 3, 4, 5])               // []
duplicates([])                            // []
duplicates(['no', 'duplicates', 'here'])  // []

duplicates([1, 2, 3, 4, 3])               // [3]
duplicates([1, 2, 3, 3, 2, 1])            // [3, 2, 1]
duplicates([1, 2, 1, 2, 1, 2, 1])         // [1, 2]

duplicates([1, 2, 3, 4, '3'])                                     // []
duplicates(['1', 2, 3, 3, '2', 1])                                // [3]
duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut'])  // [4, 3, 'zut']