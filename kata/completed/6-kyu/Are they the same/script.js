// Solution:

function comp(array1, array2) {
  if (array1 !== null && array2 !== null) {
    const arrayA = array1.sort((prev, next) => prev - next);
    const arrayB = array2.map(number => Math.sqrt(number)).sort((prev, next) => prev - next);

    return arrayA.every((number, index) => number === arrayB[index]);
  } else {
    return false;
  }
}

// Sample Tests:

const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
const a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a1, a2) // true
