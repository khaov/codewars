// Solution:

const goodWorth = [
  1, // Hobbits
  2, // Men
  3, // Elves
  3, // Dwarves
  4, // Eagles
  10 // Wizards
]

const evilWorth = [
  1, // Orcs
  2, // Men
  2, // Wargs
  2, // Goblins
  3, // Uruk Hai
  5, // Trolls
  10, // Wizards
]

function goodVsEvil(good, evil) {

  const totalWorth = function(side, worth) {
    return side.split(' ').reduce(function(total, unit, index) {
      return total + unit * worth[index];
    }, 0);
  }

  if (totalWorth(evil, evilWorth) > totalWorth(good, goodWorth)) {
    return 'Battle Result: Evil eradicates all trace of Good'
  } else if (totalWorth(evil, evilWorth) < totalWorth(good, goodWorth)) {
    return 'Battle Result: Good triumphs over Evil'
  } else {
    return 'Battle Result: No victor on this battle field'
  }
}

// Sample Tests:

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') // 'Battle Result: Evil eradicates all trace of Good'
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') // 'Battle Result: Good triumphs over Evil'
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') // 'Battle Result: No victor on this battle field'
