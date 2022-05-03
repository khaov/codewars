// Solution:

function lowercaseCount(str){
  const letters = /[^a-z]+/g;
  return str.replace (letters, '').length;
}

// Sample Tests:

lowercaseCount("abc")                                       // 3
lowercaseCount("abcABC123")                                 // 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") // 3
lowercaseCount("")                                          // 0
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")    // 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz")                // 26
