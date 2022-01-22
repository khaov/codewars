// Solution:

function solution(nums){
  if (nums) {
    return nums.sort(function(a, b){
      return a - b;
    });
  } else {
    return []
  }
}

// Sample Tests:

solution([1,2,3,10,5])  // [1,2,3,5,10]
solution(null)          // []
solution([])            // []
solution([20, 2, 10])   // [2,10,20]
solution([2, 20, 10])   // [2,10,20]
