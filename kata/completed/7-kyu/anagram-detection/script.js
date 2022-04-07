// Solution:

var isAnagram = function(test, original) {
  function sorting(word) {
    return word.toLowerCase().split('').sort().join('');
  }
  return sorting(test) === sorting(original);
}

// Sample Tests:

isAnagram("foefet", "toffee")         // true, 'The word foefet is an anagram of toffee'
isAnagram("Buckethead", "DeathCubeK") // true, 'The word Buckethead is an anagram of DeathCubeK'
isAnagram("Twoo", "WooT")             // true, 'The word Twoo is an anagram of WooT'

isAnagram("dumble", "bumble")         // false, 'Characters do not match for test case dumble, bumble'
isAnagram("ound", "round")            // false, 'Missing characters for test case ound, round'
isAnagram("apple", "pale")            // false, 'Same letters, but different count'
