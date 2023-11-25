// Solution:

function findMissing(arr1, arr2) {
  const sortedArr1 = arr1.sort((prev, next) => prev - next);
  const sortedArr2 = arr2.sort((prev, next) => prev - next);

  return sortedArr1.find((item, index) => item !== sortedArr2[index]);
}

// Sample Tests:

findMissing([1, 2, 3], [1, 3]) // 2
findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) // 8
findMissing([7], []) // 7
findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]) // 3
findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]) // 0