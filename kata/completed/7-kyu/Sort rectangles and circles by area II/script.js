// Solution:

function sortByArea(array) {

  function calculateArea(dimensions) {
    return typeof dimensions === 'object' ?
           dimensions.reduce((width, height) => width * height, 1) :
           Math.PI * (Math.pow(dimensions, 2));
  }

  array = array.slice();
  return array.sort((prev, next) => calculateArea(prev) - calculateArea(next));
}

// Sample Tests:

sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]) // [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ]
sortByArea([ [2, 5], 6 ])                                 // [ [2, 5], 6 ]
sortByArea([])                                            // []
