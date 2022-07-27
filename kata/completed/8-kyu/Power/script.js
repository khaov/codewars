// Solution:

function numberToPower(number, power){
  let result = number;

  if (power !== 0) {
    for (let i = 2; i <= power; i++) {
      result *= number;
    }
  } else {
    result = 1;
  }

  return result;
}

// Sample Tests:

numberToPower(4, 2)   // 16
numberToPower(10, 4)  // 10000
numberToPower(10, 0)  // 1
