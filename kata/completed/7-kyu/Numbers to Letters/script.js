// Solution:

function switcher(x) {
  const symbols = ' ?!abcdefghijklmnopqrstuvwxyz'.split('').reverse();
  return x.map(number => symbols[number - 1]).join('');
}

// Sample Tests:

switcher(['24', '12', '23', '22', '4', '26', '9', '8']) // 'codewars'
switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']) // 'btswmdsbd kkw'
switcher(['4', '24']) // 'wc'
