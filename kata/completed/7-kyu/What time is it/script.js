// Solution:

var getMilitaryTime = function(input) {
  const time = input.split(":");
  const AMPM = time[2].slice(2);

  let hours = Number(time[0]);
  let minutes = time[1];
  let seconds = time[2].slice(0, 2);

  if(AMPM === "PM" && hours < 12) {
    hours = hours + 12;
  };

  if(AMPM === "AM" && hours === 12) {
    hours = hours - 12;
  };

  if(hours < 10) {
    hours = "0" + hours;
  }

  return [hours, minutes, seconds].join(":");
};

// Sample Tests:

getMilitaryTime('12:00:01AM') // '00:00:01'
getMilitaryTime('11:46:47PM') // '23:46:47'
