// Solution:

function findUniq(arr) {
  return arr.find(function(number, index, array) {
    return array.indexOf(number) === array.lastIndexOf(number);
  });
}

// Sample Tests:

findUniq([ 1, 0, 0 ])           // 1
findUniq([ 0, 1, 0 ])           // 1
findUniq([ 0, 0, 1 ])           // 1
findUniq([ 1, 1, 1, 2, 1, 1 ])  // 2
findUniq([ 1, 1, 2, 1, 1 ])     // 2
findUniq([ 3, 10, 3, 3, 3 ])    // 10
findUniq([ 0, 0, 0.55, 0, 0 ])  // 0.55
