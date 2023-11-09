// Solution:

function solution(){
  let argumentsList = [];

  for (let i = 0; i < arguments.length; i++) {
    argumentsList.push(arguments[i]);
  }

  return argumentsList.some(
    (argument, index, arguments) => index !== arguments.lastIndexOf(argument)
  );
}

// Sample Tests:

solution(1,2,3)           // false
solution(1,2,3,6,5,6)     // true
solution('a','b','c','a') // true
solution(1,2,3,'a','b')   // false
