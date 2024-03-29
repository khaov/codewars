// Solution:

function arrayMash (array1, array2) {
  let mash = [];

  for (let i = 0; i < array1.length; i++) {
    mash.push(array1[i], array2[i]);
  }

  return mash;
}

// Sample Tests:

arrayMash([1, 2, 3], ['a', 'b', 'c']) // [1, 'a', 2, 'b', 3, 'c']
arrayMash([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']) // [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']
arrayMash([1, 1, 1, 1], [2, 2, 2, 2]) // [1, 2, 1, 2, 1, 2, 1, 2]
arrayMash([1, 8, 'hello', 'dog'], ['fish', '2', 9, 10]) // [1, "fish", 8, "2", "hello", 9, "dog", 10]
arrayMash([null, null, 4], [NaN, null, 'hello']) // [null, NaN, null, null, 4, "hello"]
arrayMash([1], [2]) // [1, 2]
arrayMash(['h', 'l', 'o', 'o', 'l'], ['e', 'l', 'w', 'r', 'd']) // ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
