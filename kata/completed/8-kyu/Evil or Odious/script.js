// Solution:

function evil(n) {
  return n.toString(2)
          .split('')
          .filter(digit => digit === '1').length % 2 !== 0 ?
          "It's Odious!" : "It's Evil!"
}

// Sample Tests:

evil(1) // "It's Odious!"
evil(2) // "It's Odious!"
evil(3) // "It's Evil!"
