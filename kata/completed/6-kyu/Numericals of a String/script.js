// Solution:

function numericals(s) {

  // return s.split('')
  //         .map((character, index, array) =>
  //               array.indexOf(character) === array.lastIndexOf(character) ?
  //               1 :
  //               1 + array.slice(0, index).filter(symbol => symbol === character).length
  //         )
  //         .join('');

  let string = ""
  let numerical = {}

  for (let i = 0; i < s.length; i++) {
    if (numerical[s[i]] >= 1) {
      numerical[s[i]] += 1
      string += numerical[s[i]]
    } else {
      numerical[s[i]] = 1
      string += numerical[s[i]]
    }
  }

  return string
}

// Sample Tests:

numericals("Hello, World!") // "1112111121311"
numericals("Hello, World! It's me, JomoPipi!") // "11121111213112111131224132411122"
numericals("hello hello") // "11121122342"
numericals("Hello") // "11121"
numericals("aaaaaaaaaaaa") //"123456789101112"
