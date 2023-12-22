// Solution:

function readOut(acrostic) {
  return acrostic.map(word => word[0]).join('');
}

// Sample Tests:

readOut(['Jolly', 'Amazing', 'Courteous', 'Keen']) // 'JACK'
readOut(['Marvelous', 'Excellent', 'Gifted']) // 'MEG'
