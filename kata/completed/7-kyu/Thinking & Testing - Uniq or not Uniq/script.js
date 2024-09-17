// Solution:

function testit(a,b){
  function uniq(arr) {
    return arr.filter((item, index, array) => index == array.indexOf(item))
  }

  return uniq(a).concat(uniq(b)).sort((prev, next) => prev - next);
}

// Sample Tests:

testit([0],[1])     // [0,1]
testit([1,2],[3,4]) // [1,2,3,4]
testit([1],[2,3,4]) // [1,2,3,4]
testit([1,2,3],[4]) // [1,2,3,4]
testit([1,2],[1,2]) // [1,1,2,2]

testit([1,1,1],[2,2,2]) // [1, 2]
