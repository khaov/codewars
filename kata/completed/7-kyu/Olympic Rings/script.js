// Solution:

function olympicRing(a) {
  let counter = 0;
  const rings = 'abdegopqABDOPQR'.split('');

  a.split('')
    .filter(letter => rings.includes(letter))
    .map(ring => ring === 'B' ? counter += 2 : counter++);

  counter = Math.floor(counter / 2);
  return counter === 2 ? 'Bronze!' : counter === 3 ? 'Silver!' : counter >= 4 ? 'Gold!' : 'Not even a medal!';
}

// Sample Tests:

olympicRing('LBTCzmbBmItlTcAj')     // 'Silver!'
olympicRing('wHjMudLwtoPGocnJ')     // 'Bronze!'
olympicRing('eCEHWEPwwnvzMicyaRjk') // 'Bronze!'
olympicRing('JKniLfLW')             // 'Not even a medal!'
