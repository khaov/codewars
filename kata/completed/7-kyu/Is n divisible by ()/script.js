// Solution:

function isDivisible(){
  let argumentsArray = [];

  for (let argument of Object.values(arguments)) {
    argumentsArray.push(argument);
  }

  return argumentsArray.every((number, index, array) => array[0] % number === 0);
}

// Sample Tests:

isDivisible(3,3,4)      // false
isDivisible(12,3,4)     // true
isDivisible(8,3,4,2,5)  // false
