// Solution:

function longest(s1, s2) {
  return (s1+ s2).split('').filter(function(letter, index, array){
   return index === array.lastIndexOf(letter)
  }).sort().join('');
}

// Sample Tests:

longest("aretheyhere", "yestheyarehere")                        // "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding")  // "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions")            // "acefghilmnoprstuy"
