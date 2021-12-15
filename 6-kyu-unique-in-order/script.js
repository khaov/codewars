// Solution:

var uniqueInOrder=function(iterable){
  const sourceArray = typeof iterable === 'string' ? iterable.split('') : iterable;

  return sourceArray.filter(function(item, index) {
    return sourceArray[index] !== sourceArray[index+1];
  });
}

// Sample Tests:

uniqueInOrder('AAAABBBCCDAABBB') // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       // [1,2,3]
