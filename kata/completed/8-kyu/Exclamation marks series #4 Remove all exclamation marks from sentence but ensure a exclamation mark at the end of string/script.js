// Solution:

function remove (string) {
  return string.split('')
    .filter(character => character !== '!')
    .join('') + '!';
}

// Sample Tests:

remove("Hi!");      // "Hi!"
remove("Hi!!!");    // "Hi!"
remove("!Hi");      // "Hi!"
remove("!Hi!");     // "Hi!"
remove("Hi! Hi!");  // "Hi Hi!"
remove("Hi");       // "Hi!"
