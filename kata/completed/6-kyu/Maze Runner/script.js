// Solution:

function mazeRunner(maze, directions) {

  maze.forEach(function(row, rowIndex){
    row.forEach(function(col, colIndex){
      if (col === 2) {
        y = rowIndex
        x = colIndex
      }
    });
  });

  for (var i = 0; i < directions.length; i++) {

    if (directions[i] === 'N') { y-=1 }
    if (directions[i] === 'S') { y+=1 }
    if (directions[i] === 'E') { x+=1 }
    if (directions[i] === 'W') { x-=1 }

    if (maze[y]===undefined||maze[y][x]===undefined){return 'Dead'}
    if (maze[y][x]===0){continue}
    if (maze[y][x]===1){return 'Dead'}
    if (maze[y][x]===3){return 'Finish'}
  }

  return 'Lost'
}

// Sample Tests:

var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"])                  // "Finish"
mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"])  // "Finish",
mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"])          // "Finish"

mazeRunner(maze,["N","N","N","W","W"])                                      // "Dead"
mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"])      // "Dead"

mazeRunner(maze,["N","E","E","E","E"])                                      // "Lost"
