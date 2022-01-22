// Solution:

function solution(number){
  let numbersSum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numbersSum = numbersSum + i;
    }
  }
  return numbersSum;
}

// Sample Tests:

solution(10); // 23