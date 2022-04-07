// Solution:

function removeSmallest(numbers) {
  if (numbers.length !== 0) {
    let smallestNumber = [...numbers].sort((a,b) => a-b)[0];
    let smallestIndex = numbers.indexOf(smallestNumber);
    return numbers.filter((number, index) => number !== smallestNumber || index !== smallestIndex);
  } else {
    return []
  }
}

// Sample Tests:

removeSmallest([1, 2, 3, 4, 5]) // [2, 3, 4, 5]
removeSmallest([5, 3, 2, 1, 4]) // [5, 3, 2, 4]
removeSmallest([2, 2, 1, 2, 1]) // [2, 2, 2, 1]
removeSmallest([])              // []
