// Solution:

function countRepeats(str) {
  let removed = [];
  let startIndex = 0;

  str.split('').forEach(function(character, index, array) {
    if(character !== array[index + 1]) {
      removed.push(str.slice(startIndex+1, index + 1));
      startIndex = index + 1;
    }
  })

  return removed.join('').length;
}

// Sample Tests:

countRepeats('AABCCD')  // 2
countRepeats('AABCCDA') // 2
countRepeats('AaBBCCC') // 3
