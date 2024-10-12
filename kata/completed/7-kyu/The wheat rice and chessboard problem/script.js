// Solution:

function squaresNeeded(grains){
  if(grains > 0) {
    let currentSquare = 0;
    let currentGrains = 1;

    while (currentGrains <= grains) {
      currentGrains *= 2;
      currentSquare++;
    }

    return currentSquare;
  } else {
    return 0;
  }
}

// Sample Tests:

//squaresNeeded(0) // 0, 'n=0'
squaresNeeded(1) // 1, 'n=1'
squaresNeeded(2) // 2, 'n=2'
squaresNeeded(3) // 2, 'n=3'
squaresNeeded(4) // 3, 'n=4'
