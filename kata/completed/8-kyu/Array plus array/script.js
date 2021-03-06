// Solution:

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce(function(item, prev){
    return prev + item;
  });
}

// Sample Tests:

arrayPlusArray([1, 2, 3], [4, 5, 6]) // 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]) // -21
arrayPlusArray([0, 0, 0], [4, 5, 6]) // 15
arrayPlusArray([100, 200, 300], [400, 500, 600]) // 2100
