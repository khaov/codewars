// Solution:

function nextId(ids){
  const sortedIDs = ids.sort((a,b) => a - b);

  if (sortedIDs[0] !== 0) {
    return 0;
  } else {
    let unusedIDs = [];

    sortedIDs.forEach(function(id, index, sequence){
      if (id !== sequence[index + 1] && id !== sequence[index + 1] - 1) {
        unusedIDs.push(id + 1)
      }
    });

    return unusedIDs[0]
  }
}

// Sample Tests:

nextId([0,1,2,3,5])               // 4
nextId([0,1,2,3,4,5,6,7,8,9,10])  // 11
