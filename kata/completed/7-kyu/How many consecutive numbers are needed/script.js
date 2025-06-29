// Solution:

function consecutive(array) {
  let integers = [];
  const sorted = array.sort((prev, next) => prev -next);

  let firstInteger = sorted[0];
  let lastInteger = sorted[sorted.length - 1];

  for (let i = firstInteger; i < lastInteger; i++) {
    if(!array.includes(i)) {
      integers.push(i);
    }
  }

  return integers.length;
}

// Sample Tests:

consecutive([4, 8, 6])    // 2
consecutive([1, 2, 3, 4]) // 0
consecutive([-1, -5])     // 3
consecutive([1])          // 0
consecutive([])           // 0
