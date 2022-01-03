// Solution:

function DNAStrand(dna) {
  return dna.split('').map(function(item) {
    switch (item) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'G':
        return 'C';
      case 'C':
        return 'G';
    }
  }).join('');
}

// Sample Tests:

DNAStrand("AAAA")   // "TTTT"
DNAStrand("ATTGC")  // "TAACG"
DNAStrand("GTAT")   // "CATA"
