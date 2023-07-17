// Solution:

function quadrant(x, y) {
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

// Sample Tests:

quadrant(1, 2)      // 1
quadrant(-10, 100)  // 2
quadrant(-1, -9)    // 3
quadrant(19, -56)   // 4
