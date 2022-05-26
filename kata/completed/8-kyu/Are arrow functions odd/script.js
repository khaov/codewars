// Solution:

function odds(values){
  return values.filter(number => number % 2 !== 0);
}

// Sample Tests:

odds([])                  // []
odds([2, 4, 6])           // []
odds([1, 3, 5])           // [1, 3, 5]
odds([1, 2, 3, 4, 5, 6])  // [1, 3, 5]
