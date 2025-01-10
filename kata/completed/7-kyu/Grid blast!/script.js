// Solution:

function fire(x,y) {
  const battlefield = ['top left',    'top middle',    'top right',
                       'middle left', 'center',        'middle right',
                       'bottom left', 'bottom middle', 'bottom right']

  let grid = [];

  for (let i = 0; i < 3; i++) {
    grid.push(battlefield.splice(0, 3));
  }

  return grid[y][x];
}

// Sample Tests:

fire(0,0) // 'top left'
fire(1,2) // 'bottom middle'
