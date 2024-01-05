// Solution:

function halfLife(quantityInitial, quantityRemaining, time) {
  return time / Math.log2(quantityInitial / quantityRemaining);
}

// Sample Tests:

halfLife(10,5,1)  // 1
halfLife(8,4,2)   // 2
halfLife(12,3,2)  // 1
