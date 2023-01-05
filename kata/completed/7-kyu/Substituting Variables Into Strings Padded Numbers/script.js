// Solution:

function solution(value) {
  return `Value is ${'0'.repeat(5 - value.toString().length) + value}`;
}

// Sample Tests:

solution(5)     // "Value is 00005"
solution(1204)  // "Value is 01204"
solution(109)   // "Value is 00109"
solution(0)     // "Value is 00000"
