// Solution:

function foldArray(array, runs) {

  let iterations = runs;
  let foldedArray = array

  while(iterations !== 0) {
    let iterationArray = [];

    let center = Math.floor(foldedArray.length / 2);
    let left = foldedArray.slice(0, center);
    let right = foldedArray.slice(center).reverse();

    left.forEach(function(number, index){
      iterationArray.push(number + right[index])
    })

    if (right.length > left.length) {
      iterationArray.push(right.pop())
    }

    foldedArray = iterationArray
    iterations--
  }

  return foldedArray;

}

// Sample Tests:

foldArray([ 1, 2, 3, 4, 5 ], 1)         // [ 6, 6, 3 ]
foldArray([ 1, 2, 3, 4, 5 ], 2)         // [ 9, 6 ]
foldArray([ 1, 2, 3, 4, 5 ], 3)         // [ 15 ]
foldArray([ -9, 9, -8, 8, 66, 23 ], 1)  // [ 14, 75, 0 ]
