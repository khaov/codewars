// Solution:

function amountOfPages(summary) {
  if (summary > 9) {
    let result = 0;
    let counter = 0;
    for (let number = 1; number <= summary; number++) {
      counter += number.toString().length;
      if (counter === summary) {
        return result = number;
      }
    }
  } else {
    return summary;
  }
}

// Sample Tests:

amountOfPages(5)    // 5
amountOfPages(25)   // 17
amountOfPages(1095) // 401
amountOfPages(185)  // 97
amountOfPages(660)  // 256
