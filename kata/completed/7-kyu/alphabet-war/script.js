// Solution:

function alphabetWar(fight) {
  const leftSide = {
    'w' : 4,
    'p' : 3,
    'b' : 2,
    's' : 1
  }
  const rightSide = {
    'm' : 4,
    'q' : 3,
    'd' : 2,
    'z' : 1
  }

  let leftResult = 0;
  let rightResult = 0;

  fight.split('').forEach(function(letter){
    if (letter in leftSide){
      leftResult = leftResult + leftSide[letter];
    } else if (letter in rightSide) {
      rightResult = rightResult + rightSide[letter];
    }
  });

  if (leftResult > rightResult) {
    return "Left side wins!"
  } else if (leftResult < rightResult) {
    return "Right side wins!"
  } else if (leftResult === rightResult) {
    return "Let's fight again!";
  }
}

// Sample Tests:

alphabetWar("z")        // "Right side wins!"
alphabetWar("zdqmwpbs") // "Let's fight again!"
alphabetWar("zzzzs")    // "Right side wins!"
alphabetWar("wwwwww")   // "Left side wins!"
