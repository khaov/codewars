// Solution:

function remove(string) {
  return string.split(' ')
    .map(function(word) {
      let sentence = word.split('');

      while (sentence[sentence.length - 1] === '!') {
        sentence = sentence.slice(0, sentence.length - 1)
      }

      return sentence.join('')
    }).join(' ');
}

// Sample Tests:

remove("Hi!");                // "Hi"
remove("Hi!!!");              // "Hi"
remove("!Hi");                // "!Hi"
remove("!Hi!");               // "!Hi"
remove("Hi! Hi!");            // "Hi Hi"
remove("!!!Hi !!hi!!! !hi");  // "!!!Hi !!hi !hi"
