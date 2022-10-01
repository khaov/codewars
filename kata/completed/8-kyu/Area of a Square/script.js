// Solution:

function squareArea(A){
  return Number(Math.pow(2*A / Math.PI, 2).toFixed(2));
}

// Sample Tests:

squareArea(2)     // 1.62
squareArea(0)     // 0
squareArea(14.05) // 80
