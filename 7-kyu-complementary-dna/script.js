// Solution:

function DNAStrand(dna) {
  const pairs = {
    'A':'T',
    'T':'A',
    'C':'G',
    'G':'C'
  };

  // return dna.split('').map(function(item) {
  //   switch (item) {
  //     case 'A':
  //       return 'T';
  //     case 'T':
  //       return 'A';
  //     case 'G':
  //       return 'C';
  //     case 'C':
  //       return 'G';
  //   }
  // }).join('');

  return dna.split('').map(function(item) {
    return pairs[item];
  }).join('');

}

// Sample Tests:

DNAStrand("AAAA")   // "TTTT"
DNAStrand("ATTGC")  // "TAACG"
DNAStrand("GTAT")   // "CATA"
