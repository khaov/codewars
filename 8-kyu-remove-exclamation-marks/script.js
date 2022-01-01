// Solution:

function removeExclamationMarks(s) {
  return s.split('').filter(function(item) {
    return item !== "!"
  }).join('');
}

// Sample Tests:

removeExclamationMarks("Hello World!") // "Hello World"
