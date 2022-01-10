// Solution:

function peopleWithAgeDrink(old) {
  // if (old < 14) {
  //   return 'drink toddy'
  // } else if (old < 18) {
  //   return 'drink coke'
  // } else if (old < 21) {
  //   return 'drink beer'
  // } else {
  //   return 'drink whisky'
  // }

  switch (true) {
    case old < 14:
      return 'drink toddy'
      break;
    case old < 18:
      return 'drink coke'
      break;
    case old < 21:
      return 'drink beer'
      break;
    default:
      return 'drink whisky'
  }

};

// Sample Tests:

peopleWithAgeDrink(13) // 'drink toddy'
peopleWithAgeDrink(17) // 'drink coke'
peopleWithAgeDrink(18) // 'drink beer'
peopleWithAgeDrink(20) // 'drink beer'
peopleWithAgeDrink(21) // 'drink whisky'
peopleWithAgeDrink(22) // 'drink whisky'
peopleWithAgeDrink(30) // 'drink whisky'
