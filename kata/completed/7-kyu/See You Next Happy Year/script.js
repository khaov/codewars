// Solution:

function nextHappyYear(year) {
  let happyYear = year;
  let nextYear = year + 1;

  const nextYearIsHappy = nextYear.toString().split('').every(function (number, index, array) {
    return array.lastIndexOf(number) === index
  });

  if (nextYearIsHappy === true) {
    return happyYear = nextYear;
  } else {
    return nextHappyYear(nextYear);
  }
}

// Sample Tests:

nextHappyYear(1001) // 1023
nextHappyYear(1123) // 1203
nextHappyYear(2001) // 2013
nextHappyYear(2334) // 2340
nextHappyYear(3331) // 3401
nextHappyYear(1987) // 2013
nextHappyYear(5555) // 5601
nextHappyYear(7712) // 7801
nextHappyYear(8088) // 8091
nextHappyYear(8999) // 9012
