// Solution:

function getEvenNumbers(numbersArray){
  return numbersArray.filter(number => number % 2 === 0);
}

// Sample Tests:

getEvenNumbers([1,2,3,6,8,10])  // [2,6,8,10]
getEvenNumbers([1,2])           // [2]
getEvenNumbers([12,14,15])      // [12,14]
getEvenNumbers([13,15])         // []
getEvenNumbers([1,3,9])         // []
