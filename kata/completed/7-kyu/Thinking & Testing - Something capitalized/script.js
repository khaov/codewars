// Solution:

function testit(s){
  return s !== "" ? s.split(' ').map(set => set.slice(0, set.length -  1) + set[set.length - 1].toUpperCase()).join(' ') : "";
}

// Sample Tests:


testit("")      // ""
testit("a")     // "A"
testit("b")     // "B"
testit("a a")   // "A A"
testit("a b")   // "A B"
testit("a b c") // "A B C"

testit("ab ab") // "aB aB"
testit("p obnex") // "P obneX"
