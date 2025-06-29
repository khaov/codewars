// Solution:

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(word => word.length > n);
}

// Sample Tests:

filterLongWords("The quick brown fox jumps over the lazy dog", 4) // ['quick', 'brown', 'jumps']