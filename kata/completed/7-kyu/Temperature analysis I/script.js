// Solution:

function lowestTemp(t) {
  return t.length ?
    t.split(' ').map(num => Number(num)).sort((prev, next) => prev-next)[0] : null;
}

// Sample Tests:

lowestTemp('')                                          //  null
lowestTemp('-1 50 -4 20 22 -7 0 10 -8')                 //  -8
lowestTemp('18 27 -42 16 17 -43 36 45 -25 -24 19 -14')  //  -43
