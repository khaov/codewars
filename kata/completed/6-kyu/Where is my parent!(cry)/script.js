// Solution:

function findChildren(dancingBrigade) {
  let order = [];
  const letters = dancingBrigade.split('');

  letters.forEach(
    function(letter){
      if (letter === letter.toUpperCase()) {
        let follow =
          letter +
          letters.filter(character => character === letter.toLowerCase()).join('');

          order.push(follow);
      }
    }
  );

  return order.sort().join('');
}

// Sample Tests:

findChildren("beeeEBb");     // "BbbEeee"
findChildren("uwwWUueEe");   // "EeeUuuWww"
findChildren("abBA");        // "AaBb"
findChildren("AaaaaZazzz");  // "AaaaaaZzzz"
findChildren("CbcBcbaA");    // "AaBbbCcc"
findChildren("xXfuUuuF");    // "FfUuuuXx"
