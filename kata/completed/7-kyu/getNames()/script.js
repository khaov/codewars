// Solution:

function getNames(data) {
  return data.map(item => item.name);
}

// Sample Tests:

var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

getNames(data) // ['Joe', 'Bill', 'Kate']
