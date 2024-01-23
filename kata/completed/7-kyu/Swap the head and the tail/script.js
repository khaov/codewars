// Solution:

function swapHeadAndTail(arr) {
  const middle = Math.floor(arr.length / 2);
  let swap = [];

  if(arr.length % 2 === 0) {
    const head = arr.slice(0, middle);
    const tail = arr.slice(middle);

    return tail.concat(head);
  } else {
    const head = arr.slice(0, middle);
    const body = arr.slice(middle, middle + 1);
    const tail = arr.slice(middle + 1);

    return tail.concat(body).concat(head);
  }
}

// Sample Tests:

swapHeadAndTail([ 1, 2, 3, 4, 5 ] )           // [ 4, 5, 3, 1, 2 ]
swapHeadAndTail([ -1, 2 ])                    // [ 2, -1 ]
swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]) // [ 5, 6, -7, 8, 1, 2, -3, 4 ]
