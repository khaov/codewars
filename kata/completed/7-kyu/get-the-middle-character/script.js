// Solution:

function getMiddle(s) {
  return  s.length %2 === 1 ?
          s.split('')[Math.floor(s.length / 2)] :
          s.split('')[Math.floor(s.length / 2) - 1] + s.split('')[Math.floor(s.length / 2)]
}

// Sample Tests:

getMiddle("test")     //"es"
getMiddle("testing")  //"t"
getMiddle("middle")   //"dd"
getMiddle("A")        //"A"
