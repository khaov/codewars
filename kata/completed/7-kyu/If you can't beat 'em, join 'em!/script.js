// Solution:

function cantBeatSoJoin(numbers) {
  return numbers.sort((prev, next) =>
          (next.reduce((sum, num) => sum += num, 0)) -
          (prev.reduce((sum, num) => sum += num, 0))
         )
         .reduce((combining, array) => combining = combining.concat(array), [])
}

// Sample Tests:

cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]) // [7, 8, 5, 6, 9, 3, 4, 1, 2]
cantBeatSoJoin([[5, 1], [9, 14], [17, 23], [4, 1], [0, 1]]) // [17, 23, 9, 14, 5, 1, 4, 1, 0, 1]
cantBeatSoJoin([[13, 37], [43, 17], [2, 3], [45, 64], [1, 9]]) // [45, 64, 43, 17, 13, 37, 1, 9, 2, 3]
cantBeatSoJoin([[52, 11, 33, 222], [582, 192, 442, 512, 41], [23912], [2314], [2491, 2412, 84828]]) // [2491, 2412, 84828, 23912, 2314, 582, 192, 442, 512, 41, 52, 11, 33, 222]
cantBeatSoJoin([[], [], [], []]) // []
cantBeatSoJoin([[], [], [0], []]) // [0]
cantBeatSoJoin([[1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1], [0], []]) // [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]


