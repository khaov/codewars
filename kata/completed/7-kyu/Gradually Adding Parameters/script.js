// Solution:

function add() {
  return arguments.length === 0 ? 0:
         Math.round(Object.entries(arguments).map(pair => pair[1] * (Number(pair[0]) + 1))
                                             .reduce((sum, num) => sum += num, 0));
}

// Sample Tests:

add(100,200,300) // 1400
