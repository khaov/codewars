// Solution:

function strCount(str, letter) {
  return str.split('').filter(item => item === letter).length;
}

// Sample Tests:

strCount('Hello', 'o')  // 1
strCount('Hello', 'l')  // 2
strCount('', 'z')       // 0
