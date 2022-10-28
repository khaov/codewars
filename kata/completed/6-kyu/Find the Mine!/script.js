// Solution:

function mineLocation(field){
  let mine = [];

  field.forEach((row, index) => {
    if (row.includes(1)) {
      mine = [index, row.indexOf(1)]
    }
  });

  return mine;
}

// Sample Tests:

mineLocation([ [1, 0], [0, 0] ]) // [0, 0]
mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]) // [0, 0]
mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]) // [2, 2]
mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0]] ) // [0, 0]
mineLocation([ [0, 0, 0], [0, 1, 0], [0, 0, 0]] ) // [1, 1]
mineLocation([ [0, 0, 0], [0, 0, 0], [0, 1, 0]] ) // [2, 1]
