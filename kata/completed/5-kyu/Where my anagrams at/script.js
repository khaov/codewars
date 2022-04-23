// Solution:

function anagrams(word, words) {
  function anagram(item) {
    return item.split('').sort().join('').toLowerCase();
  };

  return words.filter(function(element){
    return anagram(element) === anagram(word);
  });
}

// Sample Tests:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])                // ['aabb', 'bbaa']
anagrams('abba', ['AABB', 'abcd', 'BBAA', 'dada'])                // ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) // ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer'])                   // []
