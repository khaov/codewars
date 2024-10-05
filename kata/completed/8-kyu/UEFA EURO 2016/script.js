// Solution:

function uefaEuro2016(teams, scores){
  const message = `At match ${teams[0]} - ${teams[1]},`

  switch(true) {
    case scores[0] > scores[1]:
      return `${message} ${teams[0]} won!`;
      break;
    case scores[0] < scores[1]:
      return `${message} ${teams[1]} won!`;
      break;
    default:
      return `${message} teams played draw.`;
  }
}

// Sample Tests:

uefaEuro2016(['Germany', 'Ukraine'], [2, 0])  // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'], [0, 2])    // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'], [1, 1]) // "At match Portugal - Iceland, teams played draw."
