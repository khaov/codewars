// Solution:

function smash (words) {
  return words.join(' ').trim()
};

// Sample Tests:

smash(["hello", "world"])                                 // "hello world"
smash(["hello", "amazing", "world"])                      // "hello amazing world"
smash(['hello', 'world', 'this', 'is', 'great'])          // 'hello world this is great'
smash(["this", "is", "a", "really", "long", "sentence"])  // "this is a really long sentence"
