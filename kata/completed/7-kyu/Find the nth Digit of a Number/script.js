// Solution:

var findDigit = function(num, nth){
  let numbers = Math.abs(num).toString().split('');

  if (nth <= 0) {
    return -1;
  } else if (numbers.length < nth){
    return 0;
  } else {
    return Number(numbers.reverse()[nth - 1]);
  }
}

// Sample Tests:

findDigit(5673, 4)  // 5
findDigit(129, 2)   // 2
findDigit(-2825, 3) // 8
findDigit(-456, 4)  // 0
findDigit(0, 20)    // 0
findDigit(65, 0)    //-1
findDigit(24, -8)   //-1