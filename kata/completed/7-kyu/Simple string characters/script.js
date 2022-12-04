// Solution:

function solve(s){
  let counter = [0, 0 , 0, 0];

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);

  const letters = alpha.map((x) => String.fromCharCode(x));
  const numbers = Array.from(Array(10).keys());

  s.split('').forEach(function(character) {
    switch (true) {
      case letters.includes(character):
        counter[0]++
        break;
      case letters.includes(character.toUpperCase()):
        counter[1]++
        break;
      case numbers.includes(Number(character)):
        counter[2]++
        break;
      default:
        counter[3]++
    }
  });

  return counter;
 }

// Sample Tests:

solve("")                                       // [0,0,0,0]
solve("aAbBcC")                                 // [3,3,0,0]
solve("Codewars@codewars123.com")               // [1,18,3,2]
solve("bgA5<1d-tOwUZTS8yQ")                     // [7,6,3,2]
solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")      // [9,9,6,9]
solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD") // [15,8,6,9]
solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")             // [10,7,3,6]
solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")     // [7,13,4,10]
