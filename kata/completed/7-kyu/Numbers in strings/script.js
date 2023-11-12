// Solution:

function solve(s) {
  return s.replace(/[^\d]/g, ' ').split(' ')
          .filter(item => item != '')
          .map(item => Number(item))
          .sort((prev, next) => next - prev)[0];
};

// Sample Tests:

solve('gh12cdy695m1') // 695
solve('2ti9iei7qhr5') //   9
solve('vih61w8oohj5') //  61
solve('f7g42g16hcu5') //  42
solve( 'lu1j8qbbb85') //  85
