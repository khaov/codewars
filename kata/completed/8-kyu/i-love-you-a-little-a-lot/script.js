// Solution:

const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']

function howMuchILoveYou(nbPetals) {
  if (nbPetals > 6){
    let petals = nbPetals % 6
    if (petals > 0) {
      return phrases[petals - 1]
    } else {
      return phrases[5]
    }
  } else {
    return phrases[nbPetals - 1]
  }
}

// Sample Tests:

howMuchILoveYou(7) // "I love you"
howMuchILoveYou(3) // "a lot"
howMuchILoveYou(6) // "not at all"
howMuchILoveYou(138) // "not at all"
