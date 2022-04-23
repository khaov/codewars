// Solution:

function sumArray(array) {
  if (array===undefined || array===null || array.length <= 2) {
    return 0
  } else {
    const sortedArray = array.sort((a, b) => a- b).slice(1, array.length-1);
    return sortedArray.reduce(function(sum, number){
      return sum = sum + number
    });
  }
}

// Sample Tests:

sumArray(null)                      // 0
sumArray([ ])                       // 0
sumArray([ 3 ])                     // 0
sumArray([ 3, 5 ])                  // 0
sumArray([ 6, 2, 1, 8, 10 ])        // 16
sumArray([ 0, 1, 6, 10, 10 ])       // 17
sumArray([ -6, -20, -1, -10, -12 ]) // -28
sumArray([ -6, 20, -1, 10, -12 ])   // 3
