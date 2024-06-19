// Solution:

function sumOrProduct(array, n) {
  array.sort((prev, next) => next - prev);

  const sum = array.slice(0, n).reduce((sum, num) => sum += num, 0);
  const product = array.reverse().slice(0, n).reduce((prod, num) => prod *= num, 1);

  switch (true) {
    case (sum > product):
      return "sum";
      break;
    case (sum < product):
      return "product";
      break;
    case (sum === product):
      return "same";
      break;
  }
}

// Sample Tests:

sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)    // "sum"
sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) // "product"
sumOrProduct([10, 20, 3, 30, 5, 4], 3)              // "same"
