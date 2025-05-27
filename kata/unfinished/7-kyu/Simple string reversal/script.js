// Solution:

function solve(str) {
  let reverse = str.split('').filter(item => item !== ' ').reverse().join('');

  reverse

  let split = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      split.push(reverse.slice(0, i));
      reverse = reverse.slice(i, str.length);
    }
  }

  reverse
  split
}

// Sample Tests:

solve("codewars")         // "srawedoc"
solve("your code")        // "edoc ruoy"
solve("your code rocks")  // "skco redo cruoy"
solve("i love codewars")  // "s rawe docevoli"