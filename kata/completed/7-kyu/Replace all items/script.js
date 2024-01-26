// Solution:

function replaceAll(seq, find, replace) {

  function replaceItems(items) {
    return items.map(item => item === find ? replace : item);
  }

  return typeof seq === 'string' ? replaceItems(seq.split('')).join('') : replaceItems(seq);
}

// Sample Tests:

replaceAll([], 1, 2)      // []
replaceAll([1,2,2], 1, 2) // [2,2,2]
