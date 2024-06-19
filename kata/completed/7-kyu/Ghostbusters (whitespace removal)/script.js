// Solution:

function ghostBusters(building) {
  return building.split('').some(char => char == ' ') ?
          building.split(' ').join(''):
          "You just wanted my autograph didn't you?";
}

// Sample Tests:

ghostBusters("Factor y")    // "Factory", 'Nope, there may still be a ghost in the building. Try again.'
ghostBusters("O  f fi ce")  // "Office", 'Nope, there may still be a ghost in the building. Try again.'
ghostBusters("BusStation")  // "You just wanted my autograph didn't you?", 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.'
