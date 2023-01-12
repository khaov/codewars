// Solution:

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count < 0) {
      return `${count}<0`;
    } else if (count === 0) {
      return `${count}=0`
    } else {
      let sequence = [];

      for(let number = 0; number <= count; number++) {
        sequence.push(number)
      }

      let sequenceNum = sequence.join('+');
      let sequenceSum = sequence.reduce((sum, num) => sum += num, 0);

      return `${sequenceNum} = ${sequenceSum}`
    }
  };

  return SequenceSum;
})();

// Sample Tests:

SequenceSum.showSequence(6) // "0+1+2+3+4+5+6 = 21"
