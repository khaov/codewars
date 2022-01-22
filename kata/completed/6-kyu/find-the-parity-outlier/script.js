// Solution:

function findOutlier(integers){
  let oddCounter = 0;
  let evenCounter = 0;

  integers.forEach(function(number) {
    if (number%2 === 0) {
      evenCounter++
    } else {
      oddCounter++
    }
  });

  if (evenCounter > oddCounter) {
    const outlierItem = integers.filter(function(item) {
      return (item%2) !== 0;
    });
    return outlierItem[0];
  } else {
    const outlierItem = integers.filter(function(item) {
      return (item%2) === 0;
    });
    return outlierItem[0];
  }
}

// Sample Tests:

findOutlier([0, 1, 2]) // 1
findOutlier([1, 2, 3]) // 2
findOutlier([2,6,8,10,3]) // 3
findOutlier([0,0,3,0,0]) // 3
findOutlier([1,1,0,1,1]) // 0
