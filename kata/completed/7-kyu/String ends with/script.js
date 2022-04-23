// Solution:

function solution(str, ending){
  return ending === str.substr(str.length-ending.length, str.length)
}

// Sample Tests:

solution('abc', 'bc')     // true
solution('abc', 'd')      // false
solution('abcde', 'cde')  // true
solution('abcde', 'abc')  // false
