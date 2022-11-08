// Solution:

function createArray(number){
  var newArray = [];

  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }

  return newArray;
}

// Sample Tests:

createArray(1) // [1]
createArray(2) // [1,2]
createArray(3) // [1,2,3]
createArray(4) // [1,2,3,4]
createArray(5) // [1,2,3,4,5]
