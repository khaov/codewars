// Solution:

function squareUp(n) {
  let array = [];

  for (let i = 1; i <= n; i++) {
    let part = [];

    for (let j = 1; j <= n - i + 1; j++) {
      part.push(j);
    }

    part.push("0".repeat(n - (n - i + 1)));

    let arrayPart = part.reverse().join("");
    array.push(arrayPart);
  }

  return array.reverse().join("").split("").map(number => Number(number));
}

// Sample Tests:

squareUp(4) // [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
squareUp(9) // [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5, 4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]
squareUp(1) // [1]
