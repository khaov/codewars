// Solution:

function pattern(n) {
  var output = "";

  for (let i = 1; i <= n; i++) {
    output += String(i).repeat(i);
    i !== n ? output += '\n' : ''
  }

  return output;
 }

// Sample Tests:

pattern(1) // "1"
pattern(2) // "1\n22"
pattern(5) // "1\n22\n333\n4444\n55555"
