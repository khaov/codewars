// Solution:

function findArray(arr1, arr2) {
  return arr1.length && arr2.length ? arr2.map(item => arr1[item]) : [];
}

// Sample Tests:

findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]) // ['a', 'a']
findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]) // [1, 1, 1]
findArray([1, 2, 3, 4, 5], [0]) // [1]
findArray([1, 2, 3, 4, 5], [4,2,0]) // [5,3,1]
findArray([1, 2, 3, 4, 5], [2,2,2]) // [3,3,3]
findArray(['this', 'is', 'test'], [0, 1, 2]) // ['this', 'is', 'test']
findArray([1,2,3], []) // []
findArray([], [2,1,3]) // []
findArray([], []) // []