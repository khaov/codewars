// Solution:

function check(a, x) {
  return a.includes(x);
}

// Sample Tests:

check([66, 101], 66) // true
check([101, 45, 75, 105, 99, 107], 107) // true
check(['t', 'e', 's', 't'], 'e') // true
check(['what', 'a', 'great', 'kata'], 'kat') // false
