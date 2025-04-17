// Solution:

function uniqueSum(lst){
  return lst.filter((num, index, arr) => index == arr.lastIndexOf(num))
            .reduce((sum, num) => sum += num, null);
}

// Sample Tests:

uniqueSum([1,2,3])        // 6
uniqueSum([1,3,8,1,8])    // 12
uniqueSum([-1,-1,5,2,-7]) // -1
uniqueSum([])             // null
