// Solution:

function transposeTwoStrings (array) {
  let transposeString = [];
  const transposeLength = array[0].length >= array[1].length ? array[0].length : array[1].length;

  for (let i = 0; i < transposeLength; i++) {
    transposeString.push([array[0][i] || ' ', array[1][i] || ' ']);
  }

  return transposeString.map(item => item.join(' ')).join('\n');
}

// Sample Tests:

transposeTwoStrings(['Hello', 'World']) // "H W\ne o\nl r\nl l\no d"
transposeTwoStrings(['joey', 'louise']) // "j l\no o\ne u\ny i\n  s\n  e"
transposeTwoStrings(['a', 'cat'])       // "a c\n  a\n  t"
transposeTwoStrings(['cat', ''])        // "c  \na  \nt  "
transposeTwoStrings(['!a!a!', '?b?b'])  // "! ?\na b\n! ?\na b\n!  "
