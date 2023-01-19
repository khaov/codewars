// Solution:

function transpose(matrix) {
  let transposeMatrix = [];

  const transposeMatrixWidth = matrix.length;
  const transposeMatrixHeight = matrix[0].length;

  for (let i = 0; i < transposeMatrixHeight; i++) {
    let transposeRow = [];

    for (let j = 0; j < transposeMatrixWidth; j++) {
      transposeRow.push(matrix[j][i])
    }
    transposeMatrix.push(transposeRow);
  }

  return transposeMatrix;
}

// Sample Tests:

transpose([[1]])              // [[1]]
transpose([[1,2,3],[4,5,6]])  // [[1,4],[2,5],[3,6]]
