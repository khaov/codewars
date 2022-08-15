// Solution:

function sortByArea(array){
  return array.map(dimensions =>
    typeof dimensions === 'object' ?
           Math.round(dimensions.reduce((width, height) => width * height, 1) * 100) / 100 :
           Math.round((Math.PI * Math.pow(dimensions, 2)) * 100) / 100
  ).sort((prev, next) => prev - next);
}

// Sample Tests:

sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]) //  [ 4.31, 4.75, 27.2, 37.26 ]
sortByArea([[2, 5], 6])                                 //  [ 10, 113.1 ]
sortByArea([])                                          //  []
