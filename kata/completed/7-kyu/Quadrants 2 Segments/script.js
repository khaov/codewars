// Solution:

function segment(x, y) {
  switch (true) {
    case (x > 0 && y > 0):
      return 1;
      break;
    case (x < 0 && y > 0):
      return 2;
      break;
    case (x < 0 && y < 0):
      return 3;
      break;
    case (x > 0 && y < 0):
      return 4;
      break;
  }
}

function quadrant_segment(A, B) {
  const xA=A.x;
  const yA=A.y;

  const xB=B.x;
  const yB=B.y;

  return segment(xA, yA) !== segment(xB, yB)
}

// Sample Tests:

// quadrant_segment(new Coord(1, 2), new Coord(3, 4)) // false
// quadrant_segment(new Coord(9, 3), new Coord(-1, 6)) //true
// quadrant_segment(new Coord(-1, 6), new Coord(-9, 1)) // false
