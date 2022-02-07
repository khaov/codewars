// Solution:

function rentalCarCost(d) {
  if (d >= 7) {
    return rentalCost = d * 40 - 50
  } else if (d >= 3) {
    return rentalCost = d * 40 - 20
  } else {
    return rentalCost = d * 40
  }
}

// Sample Tests:

// "Should work for under 3 days:"

rentalCarCost(1)  // 40
rentalCarCost(2)  // 80

// "Should work for under 7 days:"

rentalCarCost(3)  // 100
rentalCarCost(4)  // 140
rentalCarCost(5)  // 180
rentalCarCost(6)  // 220

// "Should work for 7 or more days:"

rentalCarCost(7)  // 230
rentalCarCost(8)  // 270
rentalCarCost(9)  // 310
rentalCarCost(10) // 350
