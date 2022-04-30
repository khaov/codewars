// Solution:

function sumPairs(ints, s) {

  /* Array solution (Execution Timed Out) */

  // let matchedPair = undefined;
  // let parsedNums = [];

  // parsedNums.push(ints[0]);

  // for (let i = 1; i < ints.length; i++) {
  //   let neededPair = s - ints[i];

  //   if (parsedNums.includes(neededPair)) {
  //     matchedPair = [neededPair, ints[i]];
  //     break;
  //   }

  //   parsedNums.push(ints[i]);
  // }

  // return matchedPair;

  /* Set solution */

  if (ints.length >= 2) {
    let parsedNums = new Set()
    parsedNums.add(ints[0]);

    for (let i = 1; i < ints.length; i++) {
      let neededPair = s - ints[i];

      if (parsedNums.has(neededPair)) {
        return [neededPair, ints[i]];
      }

      parsedNums.add(ints[i]);
    }
    return undefined;
  } else {
    return undefined;
  }
}

// Sample Tests:

// sumPairs([1, 4, 8, 7, 3, 15], 8) // [1, 7]
// // "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8"

// sumPairs([1, -2, 3, 0, -6, 1], -6) // [0, -6]
// // "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6"

// sumPairs([20, -13, 40], -7) // undefined
// // "No Match: [20, -13, 40] should return undefined for sum = -7"

// sumPairs([1, 2, 3, 4, 1, 0], 2) // [1, 1]
// // "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2"

sumPairs([10, 5, 2, 3, 7, 5], 10) // [3, 7]
// "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10"

// sumPairs([4, -2, 3, 3, 4], 8) // [4, 4]
// // "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8"

// sumPairs([0, 2, 0], 0) // [0, 0]
// // "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0"

// sumPairs([5, 9, 13, -3], 10) // [13, -3]
// // "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10"
