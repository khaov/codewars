// Solution:

function isLucky(ticket) {
  const numbers = '0123456789'.split('')
  return ticket.length === 6 ?
    ticket.split('').every(symbol => numbers.includes(symbol)) ?
      ticket.split('').slice(0, 3).reduce((sum, num) => sum += Number(num), 0) ===
      ticket.split('').slice(3, 6).reduce((sum, num) => sum += Number(num), 0):
      false :
    false
}

// Sample Tests:

isLucky('123321')   // true
isLucky('100001')   // true
isLucky('100200')   // false
isLucky('12341234') // false
isLucky('12a12a')   // false
isLucky('')         // false
