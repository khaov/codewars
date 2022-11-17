// Solution:

function numberJoy(n) {
  const digitSum = Number(n.toString().split('').reduce((sum, num) => sum += Number(num), 0));
  const reverseSum = Number(digitSum.toString().split('').reverse().join(''));

  return digitSum * reverseSum === n;
}

// Sample Tests:

numberJoy(1997) // false
numberJoy(1998) // false
numberJoy(1729) // true
numberJoy(18)   // false
numberJoy(1)    // true
numberJoy(81)   // true
numberJoy(1458) // true
