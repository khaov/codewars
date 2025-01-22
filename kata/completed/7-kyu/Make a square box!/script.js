// Solution:

function box(n) {
  let array = new Array(n).fill('');

  return array.map((item, index) =>
    index === 0 || index === n - 1 ?
    '-'.repeat(n) :
    `-${' '.repeat(n-2)}-`
  );
}

// Sample Tests:

box(5) // ["-----", "-   -", "-   -", "-   -", "-----"]
box(2) // ["--", "--"]
box(4) // ["----", "-  -", "-  -", "----"]
box(6) // ["------", "-    -", "-    -", "-    -", "-    -", "------"]
box(3) // ["---", "- -", "---"]
