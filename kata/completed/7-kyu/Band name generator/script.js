// Solution:

function bandNameGenerator(str) {
  const firstLetter = str[0].toUpperCase();
  const base = str.slice(1, str.length);

  return str[0] === str[str.length - 1] ?
    firstLetter + base + base :
    'The ' + firstLetter + base;
}

// Sample Tests:

bandNameGenerator('knife')    // 'The Knife'
bandNameGenerator('tart')     // 'Tartart'
bandNameGenerator('sandles')  // 'Sandlesandles'
bandNameGenerator('bed')      // 'The Bed'
