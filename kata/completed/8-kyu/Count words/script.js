// Solution:

function countWords(str) {
  return str.trim().split(/\s/ ).filter(word => word).length;
}

// Sample Tests:

// "should work in basic form of problem"

countWords("Hello")                                                                                                                         // 1
countWords("Hello, World!")                                                                                                                 // 2
countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")  // 19
countWords("")                                                                                                                              // 0
countWords("With! Symbol@ #Around! (Every) %Word$")                                                                                         // 5
countWords("Dear   Victoria, I love  to press   space button.")                                                                             // 8

// "should work with spaces around string"

countWords(" Arthur ")            // 1
countWords(" David")              // 1
countWords("Nelson ")             // 1
countWords("  Hello Gomer  ")     // 2
countWords("  Hello     Bart  ")  // 2

// "should work with non-whitespace (ex. breakspace) chars"

countWords("﻿Hello﻿World ")      // 2
countWords("Hello﻿World")         // 2

