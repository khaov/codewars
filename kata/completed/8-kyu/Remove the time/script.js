// Solution:

function shortenToDate(longDate) {
  return longDate.split(',')[0];
}

// Sample Tests:

shortenToDate("Friday May 2, 9am")        // "Friday May 2"
shortenToDate("Tuesday January 29, 10pm") // "Tuesday January 29"
shortenToDate("Monday December 25, 10pm") // "Monday December 25"
