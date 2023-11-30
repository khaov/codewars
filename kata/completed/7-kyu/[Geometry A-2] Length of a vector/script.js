// Solution:

function vectorLength(vector) {
  return Math.sqrt(Math.pow((vector[1][0] - vector[0][0]), 2) + Math.pow((vector[1][1] - vector[0][1]), 2));
}

// Sample Tests:

vectorLength([[0, 1],[0, 0]])   // 1
vectorLength([[0, 3],[4, 0]])   // 5