// Solution:

function averages(numbers) {
  return numbers !== null ?
         numbers.map((number, index, array) => index !== array.length - 1 ? (number + array[index + 1]) / 2 : number)
                .slice(0, numbers.length - 1):
         [];
}

// Sample Tests:

averages(null)   // []
averages([2, 2, 2, 2, 2])   // [2, 2, 2, 2]
averages([2, -2, 2, -2, 2]) // [0, 0, 0, 0]
averages([1, 3, 5, 1, -10]) // [2, 4, 3, -4.5]
