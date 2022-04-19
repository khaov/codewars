// Solution:

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  return ((numberOfSides / 2) * Math.pow(circleRadius, 2)) * Math.sin((2 * Math.PI)/ numberOfSides);
}

// Sample Tests:

areaOfPolygonInsideCircle(3, 3)   // 11.691
areaOfPolygonInsideCircle(2, 4)   // 8
areaOfPolygonInsideCircle(2.5, 5) // 14.86
