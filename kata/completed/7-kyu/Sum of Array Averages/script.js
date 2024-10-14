// Solution:

const sumAverage = (arr) => {

  function arraySum(array) {
    return array.reduce((sum, num) => sum += num, 0);
  }

  const arrayAverage = arr.map(arrItem => arraySum(arrItem) / arrItem.length);

  return Math.floor(arraySum(arrayAverage));
}

// Sample Tests:

sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])       // 44
sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]])  // -6
