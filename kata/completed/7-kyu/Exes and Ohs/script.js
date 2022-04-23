// Solution:

function XO(str) {
  let countX = 0;
  let countO = 0;

  str.toLowerCase().split('').forEach(function(item){
    if (item === 'x') {
      countX++
    } else if (item === 'o') {
      countO++
    }
  });

  if (countX === countO) {
    return true;
  } else {
    return false;
  }
}

// Sample Tests:

XO('xo') // true
XO("xxOo") // true
XO("xxxm") // false
XO("Oo") // false
XO("ooom") // false
