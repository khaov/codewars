// Solution:

function isPythagoreanTriple(integers) {
  const sortedArray = integers.sort((prev, next) => prev - next) ;

  return Math.pow(sortedArray[0], 2) + Math.pow(sortedArray[1], 2) === Math.pow(sortedArray[2], 2)
}

// Sample Tests:

isPythagoreanTriple([3, 4, 5])      // true
isPythagoreanTriple([3, 5, 9])      // false
isPythagoreanTriple([5, 3, 4])      // true
isPythagoreanTriple([100, 3, 999])  // false
