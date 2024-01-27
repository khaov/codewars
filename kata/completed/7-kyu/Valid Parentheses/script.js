// Solution:

function validParentheses(parenStr) {
  let counter = 0;

  for (var i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(') { counter++; }
    if (parenStr[i] === ')') { counter--; }
    if (counter < 0) { return false; }
  }

  return counter === 0;
}

// Sample Tests:

validParentheses("()");                 // true
validParentheses("((()))");             // true
validParentheses("()()()");             // true
validParentheses("(()())()");           // true
validParentheses("()(())((()))(())()"); // true

validParentheses(")(");                // false
validParentheses("()()(");             // false
validParentheses("((())");             // false
validParentheses("())(()");            // false
validParentheses(")()");               // false
validParentheses(")");                 // false

validParentheses("")                    // true;
