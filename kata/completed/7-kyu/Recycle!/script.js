// Solution:

function recycleMe(recycle) {
  const plastics = recycle.filter(num => num > 0).length;
  const glass = recycle.filter(num => num < 0).length;
  const card = recycle.filter(num => num === 0).length;

  return [plastics, glass, card];
}

// Sample Tests:

recycleMe([5,-9,0,6,-84,-95,15])      // [3,3,1]
recycleMe([45,-26,-4,-66,-84,-38,14]) // [2,5,0]
