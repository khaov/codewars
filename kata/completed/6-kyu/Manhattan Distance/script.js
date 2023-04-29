// Solution:

function manhattanDistance(pointA, pointB){
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]); 
}

// Sample Tests:

manhattanDistance([1,1],[1,1]) // 0
manhattanDistance([5,4],[3,2]) // 4
manhattanDistance([1,1],[0,3]) // 3
