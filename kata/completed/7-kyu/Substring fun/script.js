// Solution:

function nthChar(words) {
  return words.map((word, index) => word.split('')[index]).join('');
}

// Sample Tests:

nthChar([]) // ''
nthChar(['yoda', 'best', 'has']) //  'yes'
