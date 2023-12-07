// Solution:

function bouncingBall(initial, proportion) {
  let bounces = 0;

  while (initial > 1) {
    initial *= proportion;
    bounces++
  }

  return bounces;
};

// Sample Tests:

bouncingBall(2, 0.5)    // 1
bouncingBall(4, 0.5)    // 2
bouncingBall(10, 0.1)   // 1
bouncingBall(100, 0.1)  // 2
bouncingBall(9, 0.3)    // 2
bouncingBall(30, 0.3)   // 3