// Solution:

function findShort(s){
  return s.split(' ').sort(
    (a, b) => a.length - b.length
  )[0].length;
}

// Sample Tests:

findShort("bitcoin take over the world maybe who knows perhaps") // 3
findShort("turns out random test cases are easier than writing out basic ones") // 3
findShort("Let's travel abroad shall we") // 2
