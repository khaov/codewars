// Solution:

function direction(facing, turn){
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

  const turns = turn / 45;
  const startIndex = directions.indexOf(facing);
  const endIndex =  (startIndex + turns) % directions.length;

  return  endIndex < 0 ?  directions[directions.length + endIndex] : directions[endIndex];
}

// Sample Tests:

direction("S", 180)   // "N"
direction("SE", -45)  // "E"
direction("W", 495)   // "NE"
direction("N", -450)  // "W"
