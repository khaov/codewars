// Solution:

function uniTotal (string) {
  return string.split('').map(char => char.charCodeAt(0))
               .reduce((num, sum) => sum += num, 0);
}

// Sample Tests:

uniTotal("")                        // 0
uniTotal("a")                       // 97
uniTotal("b")                       // 98
uniTotal("c")                       // 99
uniTotal("d")                       // 100
uniTotal("e")                       // 101
uniTotal("aaa")                     // 291
uniTotal("Mary Had A Little Lamb")  // 1873
