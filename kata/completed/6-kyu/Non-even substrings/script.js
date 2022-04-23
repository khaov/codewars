// Solution:

// bignumber.js library solution:

// const BigNumber = require('bignumber.js');

// function solve(s) {
//   const substringsArray = [];

//   for (let i = 0; i <= s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       let substring = new BigNumber(s.slice(i, j));
//       if (substring.modulo(2)*1===1) {
//         substringsArray.push(substring);
//       }
//     }
//   }

//   return substringsArray.length;
// }

// BigInt data type solution (data type is not supported by Codewars):

// function solve(s) {
//   const substringsArray = [];

//   for (let i = 0; i <= s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       let substring = BigInt(s.slice(i, j));
//       if (substring % BigInt(2) != 0) {
//         substringsArray.push(substring);
//       }
//     }
//   }

//   return substringsArray.length;
// }

function solve(s){
  var counter = 0;

  for (let i = 0; i < s.length; ++i) {
    if (+s[i] % 2 !== 0) {
      counter += i+1;
    }
  }

  return counter;
}

// Sample Tests:

solve("1341")     //  7
solve("1357")     //  10
solve("13471")    //  12
solve("134721")   //  13
solve("1347231")  //  20
solve("13472315") //  28
