// Solution:

function remove(string) {
  let sentence = string.split('');

  while (sentence[sentence.length-1] == "!") {
    sentence = sentence.slice(0, sentence.length-1);
  }

  return sentence.join('');
}

// Sample Tests:

remove("Hi!")     // "Hi"
remove("Hi!!!")   // "Hi"
remove("!Hi")     // "!Hi"
remove("!Hi!")    // "!Hi"
remove("Hi! Hi!") // "Hi! Hi"
remove("Hi")      // "Hi"
