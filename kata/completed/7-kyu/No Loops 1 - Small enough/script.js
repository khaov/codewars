// Solution:

function smallEnough(a, limit){
  return a.every(number => number <= limit)
}

// Sample Tests:

smallEnough([66, 101], 200) // true
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) // false
smallEnough([101, 45, 75, 105, 99, 107], 107) // true
smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120) // true
