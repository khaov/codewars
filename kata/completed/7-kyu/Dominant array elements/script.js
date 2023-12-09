// Solution:

function solve(arr) {
  return arr.filter((number, index, array) =>
    array.slice(index + 1).every(arrayNumber => arrayNumber < number)
  )
}

// Sample Tests:

solve([16,17,14,3,14,5,2])          // [17,14,5,2]
solve([92,52,93,31,89,87,77,105])   // [105]
solve([75,47,42,56,13,55])          // [75,56,55]
solve([67,54,27,85,66,88,31,24,49]) // [88,49]
solve([76,17,25,36,29])             // [76,36,29]
solve([104,18,37,9,36,47,28])       // [104,47,28]