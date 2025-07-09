// Solution:

function sum(matrix) {
  let mainDiagonal = matrix.map((line, lineIndex) => line.filter((_, itemIndex) => itemIndex == lineIndex))
                           .map(item => Number(item.join(''))).reduce((sum, num) => sum += num, 0);

  let secondaryDiagonal = matrix.reverse().map((line, lineIndex) => line.filter((_, itemIndex) => itemIndex == lineIndex))
                                .map(item => Number(item.join(''))).reduce((sum, num) => sum += num, 0);;

  return mainDiagonal + secondaryDiagonal;
}

// Sample Tests:

// '0x0 test'
sum([]) // 0 (0)

// '1x1 test'
sum([[4]]) // 8 (4 + 4)

// '2x2 test'
sum([[1,2], [3,4]]) // 10 (1 + 2 + 3 + 4)

// '3x3 test'
sum([[1,2,3], [4,5,6], [7,8,9]]) // 30 (1 + 5 + 9 + 3 + 5 + 7)

// '4x4 test'
sum([[-2,5,3,2],[9,-6,5,1],[3,2,7,3],[-1,8,-4,8]]) // 15 (-2 -6 + 7 + 8 + 2 + 5 + 2 -1)
