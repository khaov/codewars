// Solution:

function calculateDamage(yourType, opponentType, attack, defense) {
  let yourEffectiveness = {};

  if (yourType === "fire") {
    yourEffectiveness = { "water": 0.5, "grass": 2, "electric": 1, "fire": 0.5 }
  } else if (yourType === "water") {
    yourEffectiveness = { "water": 0.5, "grass": 0.5, "electric": 0.5, "fire": 2 }
  } else if (yourType === "grass") {
    yourEffectiveness = { "water": 2, "grass": 0.5, "electric": 1, "fire": 0.5 }
  } else if (yourType === "electric") {
    yourEffectiveness = { "water": 2, "grass": 1, "electric": 0.5, "fire": 1 }
  }

  const effectiveness = yourEffectiveness[opponentType]

  return 50 * (attack / defense) * effectiveness;
}

// Sample Tests:

calculateDamage("fire", "water", 100, 100)    // 25
calculateDamage("grass", "water", 100, 100)   // 100
calculateDamage("electric", "fire", 100, 100) // 50
calculateDamage("grass", "electric", 57, 19)  // 150
calculateDamage("grass", "water", 40, 40)     // 100
calculateDamage("grass", "fire", 35, 5)       // 175
calculateDamage("fire", "electric", 10, 2)    // 250
