// Solution:

function alternateCase(s) {
  return s.split('')
          .map(letter => letter.toLowerCase() === letter ? letter.toUpperCase() : letter.toLowerCase())
          .join('');
}

// Sample Tests:

alternateCase("abc") // "ABC"
alternateCase("ABC") // "abc"
alternateCase("Hello World") // "hELLO wORLD"
