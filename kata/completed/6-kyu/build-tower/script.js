// Solution:

function towerBuilder(nFloors) {
  const floorLength = nFloors * 2 - 1;

  let tower = [];
  let floors = 1;
  let bricks = 1;

  while (floors <= nFloors) {
    let floor = [];
    let ledges = floorLength - bricks;

    if (ledges > 0) {
      floor.push(' '.repeat(ledges/2), "*".repeat(bricks), ' '.repeat(ledges/2))
    } else {
      floor.push("*".repeat(bricks))
    }

    tower.push(floor.join(''))

    floors ++
    bricks += 2
  }

  return tower
}

// Sample Tests:

towerBuilder(1) // ["*"]
towerBuilder(2) // [" * ","***"]
towerBuilder(3) // ["  *  "," *** ","*****"]
