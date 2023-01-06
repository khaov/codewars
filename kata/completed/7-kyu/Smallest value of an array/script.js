// Solution:

function min(arr, toReturn) {
  const sortedArr = [...arr].sort((prev, next) => prev - next);
  return toReturn === 'value' ? sortedArr[0] : arr.indexOf(sortedArr[0]);
}

// Sample Tests:

min([1,2,3,4,5], 'value') // 1
min([1,2,3,4,5], 'index') // 0

min([5,4,3,2,1], 'value') // 1
min([5,4,3,2,1], 'index') // 1
