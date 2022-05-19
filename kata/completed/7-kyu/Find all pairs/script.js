// Solution:

function duplicates(array) {
  let pairs = 0;

  const duplicatedNumbers = array.filter((number, index, array) =>
    !(index === array.lastIndexOf(number)) || !(index === array.indexOf(number))
  );

  const uniqueNumbers = duplicatedNumbers.filter((number, index, array) =>
    index === array.lastIndexOf(number)
  ).sort((prev, next) => prev - next);

  uniqueNumbers.forEach(duplicate =>
    pairs += Math.floor(duplicatedNumbers.filter(number => number === duplicate).length / 2)
  );

  return pairs;
}

// Sample Tests:

duplicates([1, 2, 5, 6, 5, 2])            // 2
duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) // 4
duplicates([0, 0, 0, 0, 0, 0, 0])         // 3
duplicates([1000, 1000])                  // 1
duplicates([])                            // 0
duplicates([54])                          // 0
