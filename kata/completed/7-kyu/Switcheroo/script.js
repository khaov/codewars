// Solution:

function switcheroo(x){
  let pairs = {a: 'b', b: 'a', c: 'c'}

  return x.split('').map(letter => pairs[letter]).join('');
}

// Sample Tests:

switcheroo('abc')         // 'bac'
switcheroo('aaabcccbaaa') // 'bbbacccabbb'
switcheroo('ccccc')       // 'ccccc'
