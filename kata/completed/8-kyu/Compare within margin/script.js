// Solution:

function closeCompare(a, b, margin) {
  if (!margin) {
    switch(true) {
      case (a < b):
        return -1;
        break;
      case (a > b):
        return 1;
        break;
      case (a === b):
        return 0;
        break;
    }
  } else {
    switch(true) {
      case (margin >= Math.abs(a - b) || a === b):
        return 0;
        break;
      case (a < b):
        return -1;
        break;
      case (a > b):
        return 1;
        break;
    }
  }
}

// Sample Tests:

closeCompare(4, 5)        // -1
closeCompare(5, 5)        //  0
closeCompare(6, 5)        //  1
closeCompare(-6, -5)      // -1

closeCompare(2, 5, 3)     //  0
closeCompare(8.1, 5, 3)   //  1
closeCompare(1.99, 5, 3)  // -1
