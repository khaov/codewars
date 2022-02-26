// Solution:

function wordValue(a) {
  const letters = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
  }

  return a.map(function(string, index){
    return string.split(' ').join('').split('').reduce(function(sum, letter){
      return sum = sum + letters[letter] * (index + 1);
    }, 0);
  });
}

// Sample Tests:

wordValue(["codewars","abc","xyz"])           // [88,12,225]
wordValue(["abc abc","abc abc","abc","abc"])  // [12,24,18,24]
