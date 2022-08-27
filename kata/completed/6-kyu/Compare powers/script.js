// Solution:

function comparePowers(n1,n2){
  const first = Math.log10(n1[0]) * n1[1];
  const second = Math.log10(n2[0]) * n2[1];

  return first === second ? 0 : first > second ? -1 : 1;
}

// Sample Tests:

comparePowers([2,10],[2,15])  //  1
comparePowers([2,10],[3,10])  //  1
comparePowers([2,10],[2,10])  //  0
comparePowers([3,9],[5,6])    // -1
comparePowers([7,7],[5,8])    // -1
