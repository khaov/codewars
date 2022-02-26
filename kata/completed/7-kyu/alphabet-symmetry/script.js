// Solution:

// Object solution:

// function solve(arr){
//   const letters = {
//     'a': 1,
//     'b': 2,
//     'c': 3,
//     'd': 4,
//     'e': 5,
//     'f': 6,
//     'g': 7,
//     'h': 8,
//     'i': 9,
//     'j': 10,
//     'k': 11,
//     'l': 12,
//     'm': 13,
//     'n': 14,
//     'o': 15,
//     'p': 16,
//     'q': 17,
//     'r': 18,
//     's': 19,
//     't': 20,
//     'u': 21,
//     'v': 22,
//     'w': 23,
//     'x': 24,
//     'y': 25,
//     'z': 26
//   }

//   return arr.map(function(word){
//     return word.split('').reduce(function(sum, letter, index){
//       if (index + 1 === letters[letter.toLowerCase()]) {
//         return sum += 1;
//       } else {
//         return sum;
//       }
//     }, 0);
//   });

// }

// Alphabet solution:

function solve(arr){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return arr.map(word => word.toLowerCase().split('').filter((letter, index) => index === alphabet.indexOf(letter)).length);
}

// Sample Tests:

solve(["abode","ABc","xyzD"])                       // [4,3,1]
solve(["abide","ABc","xyz"])                        // [4,3,0]
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])  // [6, 5, 7]
solve(["encode","abc","xyzD","ABmD"])               // [1, 3, 1, 3]
