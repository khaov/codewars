// Solution:

function fridayTheThirteenths(start, end) {

  function findFriday(year) {
    for (var i = 0; i < 12; i++) {
      let date = new Date(year, i, 13)
      if(date.getDay() === 5) {
        fridays.push(`${date.getMonth() + 1}/13/${year}`) 
      }
    }
  }

  let fridays = [];

  if (start && end) {
    for (let curentYear = start; curentYear <= end; curentYear++) {
      findFriday(curentYear)  
    }
  } else if (start && !end) {
    findFriday(start)
  }

  return fridays.join(' ');
}

// Sample Tests:

fridayTheThirteenths(1999, 2000)  // "8/13/1999 10/13/2000"
fridayTheThirteenths(2000)        // "10/13/2000"
fridayTheThirteenths(2014, 2015)  // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"
