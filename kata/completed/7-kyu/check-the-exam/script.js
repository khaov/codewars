// Solution:

function checkExam(array1, array2) {
  let score = 0;

  array2.forEach(function(answer, index){
    if (answer === array1[index]) {
      score = score + 4
    } else if (answer !== array1[index] && answer !== "") {
      score = score - 1
    } else if (answer === "") {
      score = score + 0
    }
  });

  return score < 0 ? 0 : score
}

// Sample Tests:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) // 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) // 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) // 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) // 0
