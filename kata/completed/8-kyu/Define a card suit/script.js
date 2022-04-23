// Solution:

function defineSuit(card) {

  const suits = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  }

  return suits[card.split('').pop()]
}

// Sample Tests:

defineSuit('3♣') // 'clubs'
defineSuit('Q♠') // 'spades'
defineSuit('9♦') // 'diamonds'
defineSuit('J♥') // 'hearts'
