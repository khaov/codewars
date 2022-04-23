// Solution:

function solve(s) {
  let lower = 0;
  let upper = 0;

  s.split('').forEach(letter => letter.toLowerCase() === letter ? lower++ : upper++);

  return (lower > upper || lower === upper) ? s.toLowerCase() : s.toUpperCase();
}

// Sample Tests:

solve("code") //  "code"
solve("CODe") //  "CODE"
solve("COde") //  "code"
solve("Code") //  "code"
solve("coDe") //  "code"
solve("CODe") //  "CODE"
solve("coDE") //  "code"
