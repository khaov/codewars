// Solution:

const seriesValues = {
  111:  1000,
  666:  600,
  555:  500,
  444:  400,
  333:  300,
  222:  200,
  1:    100,
  5:    50
}

function score( dice ) {

  const numbersCountner = dice.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  let combinations = []

  for (number in numbersCountner) {

    if (numbersCountner[number] >= 3) {

      let combinationCount = Math.floor(numbersCountner[number] / 3)

      for (let i = 1; i <= combinationCount; i++){
        combinations.push(Number(number.repeat(3)))
      }

      let remainder = numbersCountner[number] % 3

      for (let i = 1; i <= remainder; i++){
        combinations.push(Number(number))
      }
    } else {
      for (i = 1; i <= numbersCountner[number]; i++){
        combinations.push(Number(number))
      }
    }
  }

  let ResultCount = []

  combinations.forEach(function(item) {
    if (typeof seriesValues[item] === 'undefined'){
      ResultCount.push(0)
    } else {
      ResultCount.push(seriesValues[item])
    }
  })

  return ResultCount.reduce(function(sum, item){
    return sum = sum + item
  }, 0)
}

// Sample Tests:

score( [2, 3, 4, 6, 2] ) // 0
score( [5, 1, 3, 4, 1] ) // 250
score( [4, 4, 4, 3, 3] ) // 400
score( [2, 4, 4, 5, 4] ) // 450
score( [1, 1, 1, 3, 1] ) // 1100
