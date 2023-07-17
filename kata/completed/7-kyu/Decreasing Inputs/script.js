// Solution:

function add() {
  return arguments.length === 0 ? 0:
         Math.round(Object.entries(arguments).map(pair => pair[1] / (Number(pair[0]) + 1))
                                             .reduce((sum, num) => sum += num, 0));
}

// Sample Tests:

add()               // 0
add(2)              // 2
add(4, -3, -2)      // 2
add(-1, -2, -3, -4) // -4
add(100, 200, 300)  // 300
