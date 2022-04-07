// Solution:

function isSortedAndHow(array) {
  const sourceOrder = [...array].join('');
  const ascendingOrder = [...array].sort((a, b) => a-b).join('');
  const descendingOrder = [...array].sort((a, b) => b-a).join('');

  if(sourceOrder === ascendingOrder) {
    return 'yes, ascending'
  } else if (sourceOrder === descendingOrder) {
    return 'yes, descending'
  } else {
    return 'no'
  }
}

// Sample Tests:

isSortedAndHow([1, 2])          // 'yes, ascending'
isSortedAndHow([15, 7, 3, -8])  // 'yes, descending'
isSortedAndHow([4, 2, 30])      // 'no'
