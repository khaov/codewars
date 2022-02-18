// Solution:

function getPassword(grid, directions) {
  let password = []

  grid.forEach(function(row, rowIndex){
    row.forEach(function(col, colIndex){
      if (col === "x") {
        y = rowIndex
        x = colIndex
      }
    });
  });

  for (var i = 0; i < directions.length; i++) {
    if (directions[i] === 'up') { y-=1 }
    if (directions[i] === 'down') { y+=1 }
    if (directions[i] === 'left') { x-=1 }
    if (directions[i] === 'right') { x+=1 }

    if (directions[i] === 'upT') { y-=1; password.push(grid[y][x])}
    if (directions[i] === 'downT') { y+=1; password.push(grid[y][x]) }
    if (directions[i] === 'leftT') { x-=1; password.push(grid[y][x]) }
    if (directions[i] === 'rightT') { x+=1; password.push(grid[y][x]) }
  }

  return password.join('');
}

// Sample Tests:

let t1 = [
  ["x", "l", "m"],
  ["o", "f", "c"],
  ["k", "i", "t"]
],
t1d = ["rightT", "down", "leftT", "right", "rightT", "down", "left", "leftT"];

getPassword(t1, t1d) // "lock"
