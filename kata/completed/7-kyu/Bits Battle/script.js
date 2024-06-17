// Solution:

function bitsBattle(numbers) {
  const odds = numbers.filter(number => number % 2 !== 0 && number !== 0).map(number => number.toString(2).split('').filter(digit => digit === "1").join("")).join("").length;
  const evens = numbers.filter(number => number % 2 === 0 && number !== 0).map(number => number.toString(2).split('').filter(digit => digit === "0").join("")).join("").length;

  return odds !== evens ? odds > evens ? 'odds win' : 'evens win' : 'tie';
}

// Sample Tests:

bitsBattle([5, 3, 14])          // 'odds win'
bitsBattle([3, 8, 22, 15, 78])  // 'evens win'
bitsBattle([])                  // 'tie'
bitsBattle([1, 13, 16])         // 'tie'
bitsBattle([0])                 // 'tie'
bitsBattle([0, 1, 2])           // 'tie'
