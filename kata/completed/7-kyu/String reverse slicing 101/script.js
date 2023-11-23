// Solution:

function reverseSlice(str) {
  let reverseArray = [];
  const reverseString = str.split('').reverse().join('');

  for (let i = 0; i < str.length; i++) {
    reverseArray.push(reverseString.slice(i, str.length));
  }

  return reverseArray;
}

// Sample Tests:

reverseSlice('123')   // ['321', '21', '1']
reverseSlice('abcde') // ['edcba', 'dcba', 'cba', 'ba', 'a']
