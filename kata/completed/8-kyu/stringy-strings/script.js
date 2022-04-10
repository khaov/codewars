// Solution:

function stringy(size) {
  let string = '';
  for (let i = 1; i <= size; i++) {
    string += i % 2;
  }
  return string;
}

// Sample Tests:

stringy(6) // '101010'
