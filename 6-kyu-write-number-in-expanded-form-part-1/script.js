// Solution:

function expandedForm(num) {
  expandedFormOutput = [];
  num.toString().split('').map(function(number, index) {
    if (Number(number) !==0) {
      expandedFormOutput.push (number + '0'.repeat(num.toString().length-index-1));
    }
  });
  return expandedFormOutput.join(' + ');
}

// Sample Tests:

expandedForm(12)    // '10 + 2'
expandedForm(42)    // '40 + 2'
expandedForm(70304) // '70000 + 300 + 4'
