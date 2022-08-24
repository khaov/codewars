// Solution:

var countDeafRats = function(town) {
  const directions = town.split("P");
  const toRight = 0;
  const toLeft = 1;

  function countDeaf(movement) {
    if(movement.length !== 0) {
      let deaf = 0;
      const formation = directions[movement].split(' ').join('');

      for (let position = 0; position < formation.length; position = position + 2) {
        let rat = formation.slice(position, position + 2);

        // toRight
        if (movement === 0 && rat !== "~O") {
          deaf ++
        }

        // toLeft
        if (movement === 1 && rat !== "O~") {
          deaf ++
        }
      }
      return deaf;
    } else {
      return 0;
    }
  }

  return countDeaf(toRight) + countDeaf(toLeft);
}

// Sample Tests:

countDeafRats("~O~O~O~O P")       // 0
countDeafRats("P O~ O~ ~O O~")    // 1
countDeafRats("~O~O~O~OP~O~OO~")  // 2
