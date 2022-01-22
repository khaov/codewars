// Solution:

function betterThanAverage(classPoints, yourPoints) {
  const classPointsSum = classPoints.reduce(function(sum, point) {
    return sum + point
  }, 0);

  const averagePoints = classPointsSum / classPoints.length;

  return yourPoints > averagePoints;
}

// Sample Tests:

betterThanAverage([2, 3], 5) // true
