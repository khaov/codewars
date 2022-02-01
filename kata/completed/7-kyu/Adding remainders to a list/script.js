// Solution:

function solve(nums, div) {
  return nums.map(num => num + num % div)
}

// Sample Tests:

solve([2,7,5,9,100,34,32,0],3) // [4,8,7,9,101,35,34,0]
solve([],2)                    // []
solve([1000,999,998,997],5)    // [1000,1003,1001,999]
solve([0,0,0,0],5)             // [0,0,0,0]
solve([4,3,2,1],5)             // [8,6,4,2]
solve([33,23,45,78,65],10)     // [36,26,50,86,70]
