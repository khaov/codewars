// Solution:

function getSum( a,b ) {
  if (a < b) {
    start = a;
    final = b;
  } else {
    start = b;
    final = a;
  }

  if (start !== final) {
    let sequence = []
    for (let i = start; i <= final; i++) {
      sequence.push(i);
    }
    return sequence.reduce((sum, num) => sum +=num );
  } else {
    return start;
  }
}

// Sample Tests:

getSum(0,-1)  //-1
getSum(0,1)   // 1
getSum(-1, 2) // 2
