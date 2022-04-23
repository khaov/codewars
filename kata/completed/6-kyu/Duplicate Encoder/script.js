// Solution:

function duplicateEncode(word){
  return word.toLowerCase().split('').map(function(item, index, array) {
    if (array.indexOf(item) === array.lastIndexOf(item)){
      return '('
    } else {
      return ')'
    }
  }).join('');
}

// Sample Tests:

duplicateEncode("din") // "((("
duplicateEncode("recede") // "()()()"
duplicateEncode("Success") // ")())())"