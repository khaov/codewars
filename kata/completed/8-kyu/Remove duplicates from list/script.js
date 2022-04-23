// Solution:

function distinct(a) {
  return a.filter((number, index, array) => index === array.indexOf(number))
}

// Sample Tests:

distinct([1])     // [1]
distinct([1,2])   // [1,2]
distinct([1,1,2]) // [1,2]
