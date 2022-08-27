// Solution:

function generateShape(integer){
  return `${'+'.repeat(integer)}\n`.repeat(integer).slice(0, -1);
}

// Sample Tests:

generateShape(8) // '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'
