// Solution:

function diamond(n){
  const diamondDiameter = n;
  if (n <= 0 || n % 2 === 0) {
    return null;
  } else {
    let diamond = [];

    let diameter = 1;
    let height = 1;
    let facets = 1;

    while (height <= n) {
      let ledges = diamondDiameter - facets;

      if (ledges > 0) {
        diamond.push(' '.repeat(ledges/2), "*".repeat(facets), "\n")
      } else {
        diamond.push("*".repeat(facets), "\n")
      }

      if (height < n/2) {
        diameter += 2
        facets += 2
      } else {
        diameter -= 2
        facets -= 2
      }

      height ++
    }

    return diamond.join('');
  }

}

// Sample Tests:

diamond(1)  //  "*\n"
diamond(3)  //  " *\n***\n *\n"
diamond(5)  //  "  *\n ***\n*****\n ***\n  *\n"
diamond(2)  //  null
diamond(-3) //  null
diamond(0)  //  null
