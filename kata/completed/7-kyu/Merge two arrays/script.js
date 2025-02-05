// Solution:

function mergeArrays(a, b) {
  let merge = [];
  const length = a.length >= b.length ? a.length : b.length;

  for (let i = 0; i <= length; i ++) {
    merge.push(a[i], b[i]);
  }

  return merge.filter(item => item !== undefined);
}

// Sample Tests:

mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])                  // [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])                           // ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's'])                 // [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']
mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6])  // ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']
