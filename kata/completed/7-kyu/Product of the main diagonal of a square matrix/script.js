// Solution:

function mainDiagonalProduct(mat) {
  return mat.map((row, index) => row[index])
            .reduce((sum, num) => sum *= num, 1);
}

// Sample Tests:

mainDiagonalProduct([[1,0],[0,1]])              // 1
mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]])  // 45
