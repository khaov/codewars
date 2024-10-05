// Solution:

function differenceInAges(ages){
  const minAge = Math.min(...ages)
  const maxAge = Math.max(...ages)
  const difference = Math.max(...ages) - Math.min(...ages)

  return [minAge, maxAge, difference];
}

// Sample Tests:

differenceInAges([82, 15, 6, 38, 35]) // [6, 82, 76]
differenceInAges([57, 99, 14, 32])    // [14, 99, 85]
