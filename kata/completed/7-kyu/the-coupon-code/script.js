// Solution:

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

// Sample Tests:

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")       //  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")       //  false
checkCoupon('123','123','September 5, 2014','October 1, 2014')  // true
checkCoupon('123a','123','September 5, 2014','October 1, 2014') // false
