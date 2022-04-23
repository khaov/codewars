// Solution:

const reverseSeq = n => {
  let array = [];
  for (let i = 1; i <= n; i++ ) {
    array.push(i);
  }
  return array.reverse();
};

// Sample Tests:

reverseSeq(5) // [5, 4, 3, 2, 1]
