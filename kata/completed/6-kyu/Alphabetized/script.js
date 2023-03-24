// Solution:

function alphabetized(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return s.split('')
          .filter(symbol => alphabet.includes(symbol) || alphabet.includes(symbol.toLowerCase()))
          .sort((prev, next) => alphabet.indexOf(prev.toLowerCase()) - alphabet.indexOf(next.toLowerCase()))
          .join('');
}

// Sample Tests:

alphabetized('The Holy Bible') // 'BbeehHilloTy'
