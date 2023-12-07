// Solution:

function getMissingElement(superImportantArray){
  let element = 0;

  superImportantArray.sort((prev, next) => prev - next)
                     .forEach((_, index, array) =>
                        index === array[index] ?
                        element++ : element
                      );

  return element;
}

// Sample Tests:

getMissingElement( [0,5,1,3,2,9,7,6,4]) // 8
getMissingElement( [9,2,4,5,7,0,8,6,1]) // 3
