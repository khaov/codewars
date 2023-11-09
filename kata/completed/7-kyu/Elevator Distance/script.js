// Solution:

function elevatorDistance(array) {
  return array.reduce((distance, position, floor, building) => distance += Math.abs(position - building[floor + 1] || 0), 0);
}

// Sample Tests:

elevatorDistance([5,2,8])   // 9
elevatorDistance([1,2,3])   // 2
elevatorDistance([7,1,7,1]) // 18
