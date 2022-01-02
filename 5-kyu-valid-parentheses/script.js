// Посмотреть заметку в index.html

// Solution:

function validParentheses(parens) {
  const openParentheses = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      openParentheses.push(parens[i]);
    } else if (parens[i] === ')' && openParentheses.length > 0) {
      openParentheses.pop();
    } else {
      return false;
    }
  }

  return openParentheses.length === 0;
}

// Sample Tests:

validParentheses( "(" )               // false
validParentheses( ")" )               // false
validParentheses( "" )                // true
validParentheses( "()" )              // true
validParentheses( "())" )             // false
validParentheses( ")(()))" )          // false
validParentheses( "(())((()())())" )  // true
