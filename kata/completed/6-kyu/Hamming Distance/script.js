// Solution:

function hamming(a, b) {
  let distance = 0;

  a.split('').forEach((position, index) =>
    position !== b.split('')[index] ? distance++ : distance
  );

  return distance;
}

// Sample Tests:

hamming("","");                                                   // 0
hamming("a","a");                                                 // 0
hamming("a","b");                                                 // 1
hamming("I like turtles","I like turkeys");                       // 3
hamming("Hello World","Hello World");                             // 0
hamming("hello world","hello tokyo");                             // 4
hamming("a man a plan a canal","a man a plan sobanal");           // 3
hamming("hamming and cheese","Hamming and Cheese");               // 2
hamming("espresso","Expresso");                                   // 2
hamming("old father, old artificer","of my soul the uncreated "); // 24
