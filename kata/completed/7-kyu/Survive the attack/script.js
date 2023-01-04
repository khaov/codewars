// Solution:

function hasSurvived(attackers, defenders) {
  function soldiersPower(soldiers) {
    return soldiers.reduce((power, soldier) => power += soldier, 0);
  }

  if (attackers.length && !defenders.length) {
    return false;
  } else if (!attackers.length && defenders.length) {
    return true;
  } else if (attackers.length && defenders.length) {
    let survivingAttackers = 0;
    let survivingDefenders = 0;

    attackers.forEach(function(attacker, soldier) {
      attacker - defenders[soldier] > 0 ? survivingAttackers++ : survivingDefenders++;
    });

    if (survivingAttackers !== survivingDefenders) {
      return survivingAttackers < survivingDefenders;
    } else {
      return soldiersPower(attackers) <= soldiersPower(defenders);
    }
  }
}

// Sample Tests:

// hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]) // false
// hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]) // true
// hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]) // true
// hasSurvived([], [1, 2, 3]) // true
// hasSurvived([1, 2, 3], []) // false
// hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]) // false
hasSurvived([78, 14, 42, 75, 49, 95, 2, 23, 75, 53], [14, 19, 89, 70, 11, 6, 89, 32, 53, 71])
hasSurvived([47, 23, 93, 43, 5, 27, 10, 40, 29, 17], [47, 78, 34, 41, 39, 17, 66, 19, 67, 10])
