// Solution:

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

function triangleType(a, b, c) {
  const triangleSides = [a, b, c].sort((prev, next) => next - prev);

  const longestSide = Math.pow(triangleSides[0], 2);
  const otherSides = Math.pow(triangleSides[1], 2) + Math.pow(triangleSides[2], 2);

  if (triangleSides[0] >= triangleSides[1] + triangleSides[2]) {
    return 0;
  } else {
    return longestSide < otherSides ? 1 : longestSide === otherSides ? 2 : 3;
  }
}

// Sample Tests:

triangleType(7,3,2)   // 0 // Not triangle
triangleType(2,4,6)   // 0 // Not triangle
triangleType(8,5,7)   // 1 // Acute
triangleType(3,4,5)   // 2 // Right
triangleType(7,12,8)  // 3 // Obtuse
