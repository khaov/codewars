// Solution:

function squareAreaToCircle(size){
  return Math.PI * Math.pow(Math.sqrt(size) / 2, 2);
}

// Sample Tests:

squareAreaToCircle(9)   // 7.0685834705770345;
squareAreaToCircle(20)  // 15.70796326794897;