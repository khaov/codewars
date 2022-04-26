// Solution:

function solution(pairs){
  let string = [];

  for (key in pairs) {
    string.push(`${key} = ${pairs[key]}`)
  }

  return string.join(',');
}

// Sample Tests:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
