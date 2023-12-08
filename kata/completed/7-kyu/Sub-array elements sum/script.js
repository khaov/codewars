// Solution:

function elementsSum(arr,d){
  return arr
    .map((sub, i) => 
      sub[arr.length - 1 - i] !== undefined ? sub[arr.length - 1 - i] : d || 0
    )
    .reduce((num, sum) => sum += num, 0)
}

// Sample Tests:

elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]])  // 16
elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]])           // 15
elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []])            // 7
elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5)         // 12
elementsSum([[3, 2], [4], []])                              // 0