// Solution:

function generateRange(min, max, step) {
  let range = [];

  for (let i = min; i <= max; i += step) {
    range.push(i);
  }

  return range;
}

// Sample Tests:

generateRange(1, 10, 3) // [1,4,7,10]
generateRange(2, 10, 2) // [2,4,6,8,10]
