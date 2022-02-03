// Solution:

let month = {
  Jan : "01",
  Feb : "02",
  Mar : "03",
  Apr : "04",
  May : "05",
  Jun : "06",
  Jul : "07",
  Aug : "08",
  Sep : "09",
  Oct : "10",
  Nov : "11",
  Dec : "12"

};

function driver(data) {
  let license = ""

  // 1–5

  let first_fifth_character = ""

  if (data[2].length >= 5) {
    first_fifth_character = data[2].substr(0, 5).toUpperCase()
  } else {
    first_fifth_character = data[2].toUpperCase() + "9".repeat(5 - data[2].length)
  }

  // 6

  let sixth_character = data[3].split('-')[2][2]

  // 7–8

  let seventh_eighth_character = ""
  let convertedMonth = month[data[3].split('-')[1].substr(0, 3)]

  if (data[4] === "F") {
    seventh_eighth_character = Number(convertedMonth[0]) + 5 + convertedMonth[1]
  } else {
    seventh_eighth_character = convertedMonth
  }

  // 10

  tenths_character = data[3].split('-')[0]

  // 11

  eleventh_character =  data[3].split('-')[2][3]

  // 12

  twelfth_character = " "
  if (data[1] === ""){
    twelfth_character = data[0][0] + 9
  } else {
    twelfth_character = data[0][0] + data[1][0]
  }

  return license =
    first_fifth_character +
    sixth_character +
    seventh_eighth_character +
    tenths_character +
    eleventh_character +
    twelfth_character +
    "9" +
    "AA"
}

// Sample Tests:

data = ["John","James","Smith","01-Jan-2000","M"]
driver(data) // "SMITH001010JJ9AA", "Should return 'SMITH001010JJ9AA'"

data = ["Johanna","","Gibbs","13-Dec-1981","F"]
driver(data) // "GIBBS862131J99AA", "Should return 'GIBBS862131J99AA'"

 data = ["Andrew","Robert","Lee","02-September-1981","M"]
 driver(data) // "LEE99809021AR9AA", "Should return 'LEE99809021AR9AA'"
