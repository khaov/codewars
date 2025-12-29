// Solution:

function wordSearch(query, seq){
  const array = seq.filter(str => str.toLowerCase().includes(query.toLowerCase()));
   return array.length > 0 ? array : ['Empty'];
}

// Sample Tests:

wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])   // ["ab", "abc", "zab"]
wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])   // ["ab", "abc", "zab"]
wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])   // ["aB", "Abc", "zAB"]
wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]) // ["Empty"]
