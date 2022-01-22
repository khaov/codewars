// Solution:

function DNAtoRNA(dna) {
  return dna.split('').map(function(base){
    if (base === 'T') {
      return 'U'
    } else {
      return base
    }
  }).join('');
}

// Sample Tests:

DNAtoRNA("TTTT")        // "UUUU"
DNAtoRNA("GCAT")        // "GCAU"
DNAtoRNA("GACCGCCGCC")  // "GACCGCCGCC"
