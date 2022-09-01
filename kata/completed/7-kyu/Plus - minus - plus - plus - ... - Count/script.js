// Solution:

function checkSignChange(array) {
  let counter = 0;

  array.forEach(function(number, index) {
    if ((number >= 0 && array[index + 1] < 0) ||
        (number < 0 && array[index + 1] >= 0)) {
      counter++
    }
  });

  return counter;
}

const catchSignChange = arr => arr.length !== 0 ? checkSignChange(arr) : 0;

// Sample Tests:

catchSignChange([1, 3, 4, 5])               // 0
catchSignChange([1, -3, -4, 0, 5])          // 2
catchSignChange([])                         // 0
catchSignChange([-47,84,-30,-11,-5,74,77])  // 3