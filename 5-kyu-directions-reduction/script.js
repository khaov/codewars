// Solution:

function dirReduc(arr){

  oppositeDirections = {
    "NORTH" : "SOUTH",
    "SOUTH" : "NORTH",
    "EAST"  : "WEST",
    "WEST"  : "EAST"
  }

  rightDirection = [];

  arr.forEach(function(direction, index) {
    if (rightDirection.length) {
      const lastDirection = rightDirection.pop();
      if (lastDirection !== oppositeDirections[direction]) {
        rightDirection.push(lastDirection);
        rightDirection.push(direction);
      }
    } else {
      rightDirection.push(direction);
    }    
  });
  return rightDirection
}

// Sample Tests:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])  // ["WEST"]
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])                            // ["NORTH", "WEST", "SOUTH", "EAST"]
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])            // []
