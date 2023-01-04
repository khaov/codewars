// Solution:

function findDeletedNumber(arr, mixArr) {
  return arr.find((number, index) => mixArr.indexOf(number) === -1) || 0
}

// Sample Tests:

findDeletedNumber([1,2,3,4,5], [3,4,1,5])                   // 2, 'Deletion'
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8])   // 5, 'Deletion'
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) // 0, 'No deletion'
