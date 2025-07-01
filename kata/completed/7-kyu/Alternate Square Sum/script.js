// Solution:

function alternateSqSum(arr) {
  const odd = arr.filter((_, index) => index % 2 === 0).reduce((sum, num) => sum += num, 0);
  const even = arr.filter((_, index) => index % 2 === 1).reduce((sum, num) => sum += Math.pow(num, 2), 0);

  return odd + even;
}

// Sample Tests:

alternateSqSum([])                // 0
alternateSqSum([1,2,3,4,5])       // 29
alternateSqSum([-1,0,-3,0,-5,3])  // 0
alternateSqSum([-1,2,-3,4,-5])    // 11
