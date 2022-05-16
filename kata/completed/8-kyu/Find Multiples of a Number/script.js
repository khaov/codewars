// Solution:

function findMultiples(integer, limit) {
  let multiplesArray = [integer];
  let multiplesNumber = Math.floor(limit /integer);

  for (let i = 1; i < multiplesNumber; i++){
    multiplesArray.push(multiplesArray[multiplesArray.length - 1] + integer);
  }

  return multiplesArray;
}

// Sample Tests:

findMultiples(5, 25)  //  [5, 10, 15, 20, 25]
findMultiples(1, 2)   //  [1, 2]
findMultiples(5, 7)   //  [5]
findMultiples(4, 27)  //  [4, 8, 12, 16, 20, 24]
findMultiples(11, 54) //  [11, 22, 33, 44]
