// Solution:

function count (string) {
  let letters = []
  let result = {};

  string.split('').sort().forEach(function(letter, index, array){
    if (index === 0 || letter === array[index-1]) {
      letters.push(letter)
    } else {
      letters.push(',')
      letters.push(letter)
    }
  })

  if (letters.length === 0){
    result = {}
  } else {
    letters.join('').split(',').forEach(function(item){
      result[item[0]] = item.length;
    })
  }

  return result
}

// Sample Tests:

count("abbaaaabbaba") // { a: 7, b: 5 }
count("aba")          // { a: 2, b: 1 }
count("")             // {}
