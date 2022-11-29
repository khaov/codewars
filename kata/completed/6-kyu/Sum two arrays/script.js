// Solution:

function addArrays(array1, array2) {
  let arrayToNumber1 = parseInt(array1.join('')) || 0;
  let arrayToNumber2 = parseInt(array2.join('')) || 0;

  const arraysSum = arrayToNumber1 + arrayToNumber2;

  return arraysSum === 0 ? [] :
         arraysSum > 0 ? arraysSum.toString().split('').map(item => Number(item)) :
                         Math.abs(arraysSum).toString().split('')
                                            .map((item, index) => index === 0 ? - Number(item) : Number(item))
}

// Sample Tests:

addArrays([6,7], [6,7])           // [ 1, 3, 4 ]
addArrays([], [6,7])              // [ 6, 7 ]
addArrays([], [])                 // [ ]

addArrays([3,2,9],[1,2])          // [ 3, 4, 1 ]
addArrays([4,7,3],[1,2,3])        // [ 5, 9, 6 ]
addArrays([1],[5,7,6])            // [ 5, 7, 7 ]
addArrays([3,2,6,6], [-7,2,2,8])  // [ -3, 9, 6, 2 ]
