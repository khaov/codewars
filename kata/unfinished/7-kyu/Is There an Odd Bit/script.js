// Solution:

function anyOdd(x) {
  return x.toString(2).split('').filter((_, index) => index % 2 !== 0).some(bit => bit === '1');
}

// Sample Tests:

anyOdd(2)           // 1
anyOdd(5)           // 0
anyOdd(170)         // 1

anyOdd(2863311530)  // 1
// anyOdd(128)         // 1
// anyOdd(131)         // 1
// anyOdd(24082)       // 1
// anyOdd(0)           // 0
// anyOdd(85)          // 0
// anyOdd(1024)        // 0
// anyOdd(1)           // 0
// anyOdd(1365)        // 0
