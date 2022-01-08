// Solution:

function findUniq(arr) {
  let uniqueItemIndex = 0;

  const filteredArray = arr.map(function(number) {
    return number.toLowerCase().split(' ').join('').split('').filter(function(number, index, array){
      return array.indexOf(number) === index;
    }).sort().join('');
  });

  filteredArray.forEach(function(number, index, array) {
    if(array.indexOf(number) === array.lastIndexOf(number)) {
      uniqueItemIndex = index;
    }
  });

  return arr[uniqueItemIndex];
}

// Sample Tests:

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])         // 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])             // 'foo'
findUniq([ 'silvia', 'vasili', 'victor' ])                                // 'victor'
findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]) // 'Harry Potter'
findUniq([ '    ', 'a', ' ' ])                                            // 'a'
