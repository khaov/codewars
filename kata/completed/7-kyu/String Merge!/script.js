// Solution:

function stringMerge(string1, string2, letter){
  return string1.split('').slice(0, string1.indexOf(letter)).join('') + 
         string2.split('').slice(string2.indexOf(letter)).join('')
}

// Sample Tests:

stringMerge("person","here", "e")                   // "pere"
stringMerge("apowiejfoiajsf","iwahfeijouh", "j")    // "apowiejouh"
stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x")    // "abcdefxxxyyyxyzz"
stringMerge("12345654321","123456789", "6")         // "123456789"
stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d") // "JiOdddasdfdfsd"
stringMerge("incredible","people", "e")             // "increople"