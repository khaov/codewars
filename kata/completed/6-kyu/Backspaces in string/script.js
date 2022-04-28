// Solution:

function cleanString(s) {
  let resultString = [];

  s.split('').forEach(function(symbol){
    if (symbol !== '#') {
      resultString.push(symbol);
    } else {
      resultString.pop();
    }
  });

  return resultString.join('');
}

// Sample Tests:

cleanString('abc#d##c')     // 'ac'
cleanString('abc####d##c#') // ''
