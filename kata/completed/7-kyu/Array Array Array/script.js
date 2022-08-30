// Solution:

function explode(x) {
  function repeat(array, score) {
    let result = [];

    for (let i = 1; i <= score; i++) {
      result.push(array);
    }

    return result;
  }

  switch (true) {
    case typeof x[0] === 'number' && typeof x[1] === 'number':
      return repeat(x, x[0] + x[1]);
      break;
    case typeof x[0] !== 'number' && typeof x[1] !== 'number':
      return 'Void!'
      break;
    default:
      const repetitions = x.filter(value => typeof value === 'number')[0];
      return repeat(x, repetitions);
  }
}

// Sample Tests:

explode([9, 3])     // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
explode(['a', 3])   // [['a', 3], ['a', 3], ['a', 3]] )
explode([6, 'c'])   // [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']])
explode(['a', 'b']) // 'Void!'
explode(["a", 0])   // []