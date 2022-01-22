// Solution:

function firstNonConsecutive (arr) {


  // const result = arr.find(function(number, index, array) {
  //   return (index > 0 && Math.abs(number - array[index-1]) !== 1);
  // });

  // // С помощью метода Number.isInteger() определяем,
  // // является ли переданное значение result целым числом.

  // return Number.isInteger(result) ? result : null

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i+1]) !== 1) {
      return arr[i+1];
    }
  }
  return null;
}

// Sample Tests:

firstNonConsecutive([-6,-5,-4,-3,-2,-1,0,1,2,3]) // null
firstNonConsecutive([1,2,3,4,6,7,8]) // 6
