// Solution:

function nbDig(n, d) {
  let counter = 0;
  for (let k  = 0; k <= n; k++) {
    (k*k).toString().split('').forEach(function(item) {
      if ( item === d.toString()) {
        counter++
      }
    });
  }
  return counter;
}

// Sample Tests:

nbDig(25, 1) // 11
nbDig(5750, 0) // 4700
nbDig(11011, 2) // 9481
nbDig(12224, 8) // 7733
nbDig(11549, 1) // 11905
