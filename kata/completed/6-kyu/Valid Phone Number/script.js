// Solution:

// function validPhoneNumber(phoneNumber){
//   return phoneNumber !== phoneNumber.replace(/^\(\d{3}\)\ \d{3}\-\d{4}$/)
// }

function validPhoneNumber(phoneNumber){
  if (phoneNumber.length !== 14 ||
     (phoneNumber[0] !== "(" && phoneNumber[4] !== ")") ||
      phoneNumber[5] !== " " ||
      phoneNumber[9] !== "-"
     ) {
      return false;
     } else {
      return true;
     }
}

// Sample Tests:

validPhoneNumber("(123) 456-7890") // true
validPhoneNumber("(1111)555 2345") // false
validPhoneNumber("(098) 123 4567") // false
