// Solution:

function power(x,y){
  if (x === 1 || (x === 0 && y === 0)) {
    return 1;
  } else {
  let value = 1;

  for (let i = 1; i <= y; i++) {
    value *= x;
  }

  return value;
  }
}

// Sample Tests:

power(1, 701270)  // 1
power(2, 2)       // 4
power(3, 2)       // 9
power(-1, 40)     // 1
