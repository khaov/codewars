// Solution:

function whatday(num) {
  const weekDays = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  }

  return num in weekDays ? weekDays[num] : 'Wrong, please enter a number between 1 and 7';
}

// Sample Tests:

whatday(1)  //  'Sunday'
whatday(2)  //  'Monday'
whatday(3)  //  'Tuesday'
whatday(8)  //  'Wrong, please enter a number between 1 and 7'
whatday(20) //  'Wrong, please enter a number between 1 and 7'
