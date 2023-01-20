// Solution:

function calculateAge(birthYear, countYear) {
  switch (true) {
    case (birthYear === countYear):
      return "You were born this very year!"
      break;
    case ((birthYear > countYear) && (birthYear - countYear === 1)):
      return `You will be born in ${birthYear - countYear} year.`
      break;
    case ((birthYear < countYear) && (countYear - birthYear === 1)):
      return `You are ${countYear - birthYear} year old.`
      break;
    case (birthYear > countYear):
      return `You will be born in ${birthYear - countYear} years.`
      break;
    default:
      return `You are ${countYear - birthYear} years old.`
  }
}

// Sample Tests:

calculateAge(2012, 2016)  // "You are 4 years old."
calculateAge(1989, 2016)  // "You are 27 years old."
calculateAge(2000, 2090)  // "You are 90 years old."
calculateAge(2000, 1990)  // "You will be born in 10 years."
calculateAge(3400, 3400)  // "You were born this very year!"
calculateAge(900, 2900)   // "You are 2000 years old."
calculateAge(2010, 1990)  // "You will be born in 20 years."
calculateAge(2010, 1500)  // "You will be born in 510 years."
calculateAge(2011, 2012)  // "You are 1 year old."
calculateAge(2000, 1999)  // "You will be born in 1 year."
