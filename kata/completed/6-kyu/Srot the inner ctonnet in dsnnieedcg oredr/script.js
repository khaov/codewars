// Solution:

function sortTheInnerContent(words) {
  return words.split(' ')
              .map(word => word.length > 3 ?
                           word[0] + word.slice(1, word.length - 1).split('').sort().reverse().join('') + word[word.length - 1] :
                           word)
              .join(' ');
}

// Sample Tests:

sortTheInnerContent("sort the inner content in descending order") // "srot the inner ctonnet in dsnnieedcg oredr"
sortTheInnerContent("wait for me") // "wiat for me"
sortTheInnerContent("this kata is easy") // "tihs ktaa is esay"
