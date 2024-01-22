// Solution:

function sumTimesTables(tables, min, max) {
  if (tables.length) {
    let sum = [];

    for (let i = 0; i < tables.length; i++) {
      for (let j = min; j <= max; j++) {
        sum.push(tables[i] * j);
      }
    }

    return sum.reduce((sum, num) => sum += num);
  } else {
    return 0;
  }
}

// Sample Tests:

sumTimesTables([2,3],1,3)     // 30
sumTimesTables([1,3,5],1,1)   // 9
sumTimesTables([1,3,5],1,10)  // 495
