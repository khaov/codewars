// Solution:

function hasUniqueChars(str){
  return str.split('').every((character, index, array) => index === array.lastIndexOf(character));
}

// Sample Tests:

hasUniqueChars("  nAa")   // false because there are two spaces ' '
hasUniqueChars("abcdef")  // true
hasUniqueChars("aA")      // true case - sensitivity
hasUniqueChars("++-")     // false because there are two '+'
