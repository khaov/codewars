// Solution:

multiplicationTable = function(size) {
  let table = [];
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(j * i);
    }
    table.push(row);
  }
  return table
}

// Sample Tests:

multiplicationTable(3) // [[1,2,3], [2,4,6], [3,6,9]]
