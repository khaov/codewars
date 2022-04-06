// Solution:

function divisibleBy(numbers, divisor){
  return numbers.filter(number => number % divisor === 0)
}

// Sample Tests:

divisibleBy([1,2,3,4,5,6], 2)   // [2,4,6]
divisibleBy([1,2,3,4,5,6], 3)   // [3,6]
divisibleBy([0,1,2,3,4,5,6], 4) // [0,4]
divisibleBy([0], 4)             // [0]
divisibleBy([1,3,5], 2)         // []
