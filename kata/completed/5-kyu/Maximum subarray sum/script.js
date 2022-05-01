// Solution:

var maxSequence = function(arr) {
  if (arr.length > 0) {
    sequencesSums = [];

    let test = arr.slice(0, arr.length)

    arr.forEach(function(number, arrayIndex) {
      let subArray = arr.slice(arrayIndex, arr.length);
      let subArrayIndex = 0;

      while (subArrayIndex != subArray.length + 1) {
        sequencesSums.push(subArray.slice(0, subArrayIndex).reduce((sum, num) => sum += num, 0));
        subArrayIndex++
      }
    });
    
    return sequencesSums.sort((prev, next) => next - prev)[0];
  } else {
    return 0;
  }
}

// Sample Tests:

maxSequence([]) // 0
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // 6
