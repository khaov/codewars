// Solution:

function pyramid(n) {
  if (n > 0) {
    let pyramidArray = [];

    for (let i = 1; i <= n; i++ ) {
      let subArray = [];

      for (let j = 1; j <= i; j++) {
        subArray.push(1);
      }

      pyramidArray.push(subArray);
    }

    return pyramidArray;
  } else {
    return [];
  }
}

// Sample Tests:

pyramid(0)  // []
pyramid(1)  // [[1]]
pyramid(2)  // [[1], [1, 1]]
pyramid(3)  // [[1], [1, 1], [1, 1, 1]]
