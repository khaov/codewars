// Solution:

var runLengthEncoding = function(str) {
  let lengthEncoding = [];
  let countStart = 0;

  str.split('').forEach(
    function(element, index, array) {
      if(element !== array[index + 1]) {
        lengthEncoding.push([array.slice(countStart, index + 1).length, element]);
        countStart = index + 1;
      }
    }
  );

  return lengthEncoding;
}

// Sample Tests:

runLengthEncoding("")                                                                     // []
runLengthEncoding("abc")                                                                  // [[1,'a'],[1,'b'],[1,'c']]
runLengthEncoding("aab")                                                                  // [[2,'a'],[1,'b']]
runLengthEncoding("hello world!")                                                         // [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]
runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")                                // [[34,'a'], [3,'b']]
runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")  // [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
