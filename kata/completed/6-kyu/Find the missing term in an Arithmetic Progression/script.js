// Solution:

var findMissing = function (list) {
  for (let i = 1; i <= list.length - 2; i++) {
    if (list[i] - list[i - 1] !== list[i + 1] - list[i]) {
      return list[i - 1] + (list[i + 1] - list[i]);
    }
  }
}

// Sample Tests:

findMissing([1, 3, 4])        // 2
findMissing([1, 3, 5, 9, 11]) // 7
