// Solution:

function sumConsecutives(s) {
  let consecutivesSum = [];

  s.forEach(function(number, index, array) {
    consecutivesSum.push(number);

    if (number === array[index - 1]) {
      consecutivesSum.pop();
      consecutivesSum.push(consecutivesSum.pop() + array[index - 1]);
    }
  });

  return consecutivesSum;
}

// Sample Tests:

sumConsecutives([1,4,4,4,0,4,3,3,1])  // [1,12,0,4,6,1]
sumConsecutives([1,1,7,7,3])          // [2,14,3]
sumConsecutives([-5,-5,7,7,12,0])     // [-10,14,12,0]
sumConsecutives([3,3,3,3,1])          // [12, 1]
