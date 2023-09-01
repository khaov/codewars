// Solution:

function tailSwap(arr) {
  let head=[];
  let tail=[];

  arr.map((string) =>
    string.split(":").map((character, index) =>
      index % 2 === 0 ? head.push(character):tail.push(character)
    )
  )

  tail.reverse()
  return head.map((character, index) => character + ":" + tail[index]);
}

// Sample Tests:

tailSwap(['abc:123', 'cde:456']); // ['abc:456', 'cde:123']
tailSwap(['a:12345', '777:xyz']); // ['a:xyz', '777:12345']
