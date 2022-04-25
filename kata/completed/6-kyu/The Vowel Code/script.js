// Solution:

const vowels = {
  a : '1',
  e : '2',
  i : '3',
  o : '4',
  u : '5'
}

function convert(entry, object) {
  return entry.split('').map(symbol => symbol in object ? object[symbol] : symbol).join('')
}

function encode(string) {
  return convert(string, vowels)
}

function decode(string) {
  let numbers = {}

  Object.entries(vowels).forEach(([key, value]) => {
    numbers[value] = key;
  });

  return convert(string, numbers)
}

// Sample Tests:

encode('hello')                     // 'h2ll4'
encode('How are you today?')        // 'H4w 1r2 y45 t4d1y?'
encode('This is an encoding test.') // 'Th3s 3s 1n 2nc4d3ng t2st.'
decode('h2ll4')                     // 'hello'
