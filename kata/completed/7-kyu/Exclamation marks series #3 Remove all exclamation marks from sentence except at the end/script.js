// Solution:

function remove (string) {
  let sentence = string.split('');
  let exclamation = [];

  while (sentence[sentence.length-1] == "!") {
    exclamation.push(sentence.pop());
  }

  sentence = sentence.filter(character => character !== '!').join('');

  return sentence + exclamation.join('');
}

// Sample Tests:

remove("Hi!");      // "Hi!"
remove("Hi!!!");    // "Hi!!!"
remove("!Hi");      // "Hi"
remove("!Hi!");     // "Hi!"
remove("Hi! Hi!");  // "Hi Hi!"
remove("Hi");       // "Hi"
