// Solution:

function solution(words) {

  function arrayDiff(a, b) {
    return a.filter(number => !b.includes(number));
  }

  const firstLetters = words.map(word => word[0]).sort();
  const lastLetters = words.map(word => word[word.length - 1]).sort();

  const firstLastDiff = arrayDiff(firstLetters, lastLetters);
  const lastFirstDiff = arrayDiff(lastLetters, firstLetters);

  return arrayDiff(firstLetters, firstLastDiff).join('') === arrayDiff(lastLetters, lastFirstDiff).join('') &&
         firstLastDiff.length === lastFirstDiff.length
}

// Sample Tests:

solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]) // true
solution(["trade", "pole", "view", "grave", "ladder", "mushroom", "president"]) // false
// solution(["screen", "desire", "theater", "excess", "night"]) // true
// solution(["engine", "endure", "elite", "excess"]) // true
// solution(["east", "e", "e", "t", "t", "e", "time"]) // true
// solution(["no", "dog", "on", "good"]) // false

