// Solution:

function find_average(array) {
  return array.length > 0 ?  array.reduce((sum, num) => sum += num, 0) / array.length : 0
}

// Sample Tests:

find_average([1,1,1])   //  1
find_average([1,2,3])   //  2
find_average([1,2,3,4]) //  2.5
