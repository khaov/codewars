// Solution:

function longestWord(stringOfWords){
  return stringOfWords.split(' ').reduce((longest, word) => word.length >= longest.length ? word : longest, '');
}

// Sample Tests:

longestWord('a b c d e fgh') // "fgh"
longestWord('one two three') // "three"
longestWord('red blue grey') // "grey"
