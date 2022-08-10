// Solution:

function orderedCount(text) {
  let result = [];

  const uniqueItems = text.split('').filter((item, index, array) => index === array.indexOf(item));
  uniqueItems.forEach(unique =>  result.push([unique, text.split('').filter(item => item === unique).length]));

  return result;
}

// Sample Tests:

orderedCount("abracadabra") // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
orderedCount("Code Wars")   // [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
orderedCount("233312")      // [['2', 2], ['3', 3], ['1', 1 ]]
