// Solution:

const sequenceSum = (begin, end, step) => {

  let result = 0;

  if (begin > end) {
    result = 0;
  } else {
    for (let i = begin; i <= end;  i = i + step) {
      result = result + i;
    }
  }

  return result;

};

// Sample Tests:

sequenceSum(2, 6, 2) // 12
sequenceSum(1, 5, 1) // 15
sequenceSum(1, 5, 3) // 5
sequenceSum(5, 1, 3) // 0
