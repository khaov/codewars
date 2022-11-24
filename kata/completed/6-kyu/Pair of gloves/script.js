// Solution:

function numberOfPairs(gloves) {
  return gloves.reduce((pairs, color, index, array) =>
    index === array.indexOf(color) && index !== array.lastIndexOf(color) ?
      pairs += Math.floor(array.filter(pairColor => pairColor === color).length / 2) :
      pairs += 0, 0
)}

// Sample Tests:

numberOfPairs(['red','red']) // 1
numberOfPairs(['red','green','blue']) // 0
numberOfPairs(['gray','black','purple','purple','gray','black']) // 3
