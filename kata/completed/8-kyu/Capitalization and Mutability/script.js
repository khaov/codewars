// Solution:

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// Sample Tests:

capitalizeWord('word')      // 'Word'
capitalizeWord('i')         // 'I'
capitalizeWord('glasswear') // 'Glasswear'
