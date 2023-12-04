// Solution:

var solution = function(firstArray, secondArray) {
  return firstArray.map((number, index) => Math.abs(number - secondArray[index]))
    .map(number => Math.pow(number, 2))
    .reduce((sum, number) => sum += number, 0) / firstArray.length;
}

// Sample Tests:

solution([1,2,3],[4,5,6])           // 9
solution([10,20,10,2],[10,25,5,-2]) // 16.5
solution([0,-1], [-1,0])            // 1
