// Solution:

function expandedForm(num) {
  expandedFormOutput = [];
  num.toString().split('.').forEach(function(part, index) {
    if (index === 0) {
      part.split('').map(function(number, index) {
        if (Number(number) !==0) {
          expandedFormOutput.push (number + '0'.repeat(part.length-index-1));
        }
      });
    } else {
      part.split('').map(function(number, index) {
        if (Number(number) !==0) {
          expandedFormOutput.push (`${number}/1${'0'.repeat(index+1)}`);
        }
      });
    }
  });
  return expandedFormOutput.join(' + ');
}

// Sample Tests:

expandedForm(807.304) // '800 + 7 + 3/10 + 4/1000'
expandedForm(1.24)    // '1 + 2/10 + 4/100'
expandedForm(4.28)    // '4 + 2/10 + 8/100'
expandedForm(7.304)   // '7 + 3/10 + 4/1000'
expandedForm(0.04);   // '4/100'

