// Solution:

function maxDiff(list) {
  return list.length !== 0 ? Math.max.apply(null, list) - Math.min.apply(null, list) : 0;
};

// Sample Tests:

maxDiff([0, 1, 2, 3, 4, 5, 6])    // 6
maxDiff([-0, 1, 2, -3, 4, 5, -6]) // 11
maxDiff([0, 1, 2, 3, 4, 5, 16])   // 16
maxDiff([16])                     // 0
maxDiff([])                       // 0