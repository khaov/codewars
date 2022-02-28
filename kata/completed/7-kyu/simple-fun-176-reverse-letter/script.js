// Solution:

function reverseLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return str.split('').filter(symbol => alphabet.includes(symbol)).reverse().join('');
}

// Sample Tests:

reverseLetter("krishan")    // "nahsirk"
reverseLetter("ultr53o?n")  // "nortlu"
reverseLetter("ab23c")      // "cba"
reverseLetter("krish21an")  // "nahsirk"
