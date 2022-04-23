// Solution:

function hero(bullets, dragons){
  return bullets >= dragons * 2
}

// Sample Tests:

hero(10, 5)     // true
hero(7, 4)      // false
hero(4, 5)      // false
hero(100, 40)   // true
hero(1500, 751) // false
hero(0, 1)      // false
