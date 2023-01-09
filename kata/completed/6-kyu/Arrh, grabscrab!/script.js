// Solution:

function grabscrab(anagram, dictionary) {
  function sortLetters(word) {
    return word.split('').sort().join('');
  }

  return dictionary.filter(word => sortLetters(word) === sortLetters(anagram));
}

// Sample Tests:

grabscrab("trisf", ["first"])                             // ["first"], "Should have found 'first'"
grabscrab("oob", ["bob", "baobab"])                       // [], "Should not have found anything"
grabscrab("ainstuomn", ["mountains", "hills", "mesa"])    // ["mountains"], "Should have found 'mountains'"
grabscrab("oolp", ["donkey", "pool", "horse", "loop"])    // ["pool", "loop"], "Should have found 'pool' and 'loop'"
grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]) // ["sport", "ports"], "Should have found 'sport' and 'ports'"
grabscrab("ourf", ["one","two","three"])                  // [], "Should not have found anything"
