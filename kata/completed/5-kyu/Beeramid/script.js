// Solution:

// Returns number of complete beeramid levels

var beeramid = function(bonus, price) {
  let levels = 0;
  let beerCans = Math.floor(bonus / price);

  while (beerCans >= Math.pow(levels + 1, 2)) {
    levels++;
    beerCans -=  Math.pow(levels, 2);
  }

  return levels;
}

// Sample Tests:

beeramid(9, 2)    // 1
beeramid(10, 2)   // 2
beeramid(11, 2)   // 2
beeramid(21, 1.5) // 3
beeramid(454, 5)  // 5
beeramid(455, 5)  // 6
beeramid(4, 4)    // 1
beeramid(3, 4)    // 0
beeramid(0, 4)    // 0
beeramid(-1, 4)   // 0
