// Solution:

function makeString(s){
  return s.split(' ').map(word => word[0]).join('');
}

// Sample Tests:

makeString("sees eyes xray yoat")         // "sexy"
makeString("brown eyes are nice")         // "bean"
makeString("cars are very nice")          // "cavn"
makeString("kaks de gan has a big head")  // "kdghabh"
