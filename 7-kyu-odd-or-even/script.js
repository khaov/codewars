// Solution:

function oddOrEven(array) {
  let result = '';

  if (array.length !== 0) {

    array.reduce(function(item, prev){
      return summ = prev + item
    }, 0);

    if (Math.abs(summ)%2) {
      return result = 'odd'
    } else {
      return result = 'even'
    }
  } else {
    return result = 'even';
  }
}

// Sample Tests:

oddOrEven([0]) // 'even'
oddOrEven([1]) // 'odd'
oddOrEven([]) // 'even'
oddOrEven([0, 1, 5]) // 'even'
oddOrEven([0, 1, 3]) // 'even'
oddOrEven([1023, 1, 2]) // 'even'
oddOrEven([0, -1, -5]) // 'even'
oddOrEven([0, -1, -3]) // 'even'
oddOrEven([-1023, 1, -2]) // 'even'
oddOrEven([0, 1, 2]) // 'odd'
oddOrEven([0, 1, 4]) // 'odd'
oddOrEven([1023, 1, 3]) // 'odd'
oddOrEven([0, -1, 2]) // 'odd'
oddOrEven([0, 1, -4]) // 'odd'
oddOrEven([-1023, -1, 3]) // 'odd'

