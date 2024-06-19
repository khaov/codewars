// Solution:

function bitsWar(numbers) {
  function strength(sequence, option) {
    return sequence
      .filter(number =>
        option === "odd" ? number % 2 !== 0 : number % 2 === 0
        && number !== 0
      )
      .map(number => number.toString(2).split('').filter(digit => digit !== "0").join(""))
      .map(digit => digit[0] === "-" ? -digit.length + 1 : digit.length)
      .reduce((sum, num) => sum += num, 0);
  }

  const odds = strength(numbers, "odd");
  const evens = strength(numbers, "even");

  return odds !== evens ? odds > evens ? 'odds win' : 'evens win' : 'tie';
}

// Sample Tests:

bitsWar([1,5,12])     // "odds win"
bitsWar([7,-3,20])    // "evens win"
bitsWar([7,-3,-2,6])  // "tie"
bitsWar([-3,-5])      // "evens win"
bitsWar([])           // "tie"
