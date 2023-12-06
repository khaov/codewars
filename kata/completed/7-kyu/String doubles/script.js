// Solution:

function doubles(s) {
  letters = [];

  for (let letter of s) {
    letters.length !== 0 && letters[letters.length - 1] === letter ?
    letters.pop() : letters.push(letter);
  }

  return letters.join('');
}

// Sample Tests:

doubles('abbbzz') // 'ab'
doubles('zzzzykkkd') // 'ykd'
doubles('abbcccdddda') // 'aca'
doubles('vvvvvoiiiiin') // 'voin'
doubles('rrrmooomqqqqj') // 'rmomj'
doubles('xxbnnnnnyaaaaam') // 'bnyam'