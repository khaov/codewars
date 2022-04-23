// Solution:

var capitals = function (word) {
  let capitalsIndexes = []
	word.split('').map(function (item, index, array) {
    if (item === item.toUpperCase()) {
      capitalsIndexes.push(array.indexOf(item));
    }
  });
  return capitalsIndexes;
};

// Sample Tests:

capitals('CodEWaRs') // [0,3,4,6]
