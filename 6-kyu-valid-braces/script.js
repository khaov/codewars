// Solution:

function validBraces(braces){
  const leftBraces = ['(', '[', '{'];
  const rightBraces = [')', ']', '}'];
  const bracesStack = [];

  braces.split('').forEach(function(item) {

    const leftBraceIndex = leftBraces.indexOf(item);

    if (leftBraceIndex > -1) {
      bracesStack.push(item);
    } else {
      let lastBraceItem = bracesStack[bracesStack.length-1];
      const rightBraceIndex = rightBraces.indexOf(item);
      const rightBracePair = leftBraces[rightBraceIndex];
      if (rightBracePair === lastBraceItem) {
        // Пара совпала, удаляем последний «открывающий» элемент
        bracesStack.pop();
      } else {
        // Пара не совпала, добавляем «закрывающий» элемент в массив «открывающих»,
        // делая невозможной проверку на с следующей итерации
        bracesStack.push(item);
      }
    }
  });

  return bracesStack.length === 0;
}

// Sample Tests:

validBraces( "()" )             // true
validBraces( "[(])" )           // false
validBraces( "(){}[]" )         // true
validBraces( "([{}])" )         // true
validBraces( "(}" )             // false
validBraces( "[({})](]" )       // false
validBraces( "({})[({})]" )     // true
validBraces( "(})" )            // false
validBraces( "(({{[[]]}}))" )   // true
validBraces( "{}({})[]" )       // true
validBraces( ")(}{][" )         // false
validBraces( "())({}}{()][][" ) // false
validBraces( "(((({{" )         // false
validBraces( "}}]]))}])" )      // false
