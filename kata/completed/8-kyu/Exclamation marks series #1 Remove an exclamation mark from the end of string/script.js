// Solution:

function remove (string) {
  const lastCharacter = string[string.length -1];
  return lastCharacter === '!' ? string.slice(0, -1) : string;
}

// Sample Tests:

remove("Hi!");      // "Hi"
remove("Hi!!!");    // "Hi!!"
remove("!Hi");      // "!Hi"
remove("!Hi!");     // "!Hi"
remove("Hi! Hi!");  // "Hi! Hi"
remove("Hi");       // "Hi"
