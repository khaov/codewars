// Solution:

function countPositivesSumNegatives(input) {
  let positivers = 0;
  let negatives = 0;

  if (input !== null) {
    input.forEach(function(number) {
      number > 0 ? positivers ++ : negatives += number;
    });
    if (positivers !== 0 || negatives !== 0){
      return [positivers, negatives]
    } else {
      return [];
    }
  } else {
    return [];
  }
}

// Sample Tests:

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])  // [10, -65]
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])       // [8, -50]
