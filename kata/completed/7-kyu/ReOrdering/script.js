// Solution:

function reOrdering(text){
  let order = [];

  const words = text.split(' ');
  const firstWord = words.find((item) => item[0] === item[0].toUpperCase());
  const firstWordIndex = words.indexOf(firstWord);

  const leftTextSide = words.slice(0, firstWordIndex).join(' ');
  const rightTextSide = words.slice(firstWordIndex + 1, text.lenght).join(' ');

  order.push(firstWord, leftTextSide, rightTextSide);

  return order.join(' ').replace(/ +/g, ' ').trim();
}

// Sample Tests:

reOrdering('ming Yao') // 'Yao ming'
reOrdering('Mano donowana') // 'Mano donowana'
reOrdering('wario LoBan hello') // 'LoBan wario hello'
reOrdering('bull color pig Patrick') // 'Patrick bull color pig'
// reOrdering('jojo ddjajdiojdwo ana G nnibiial') // 'G jojo ddjajdiojdwo ana nnibiial'
// reOrdering('is one of those rare names that s both exotic and simple Adira') //'Adira is one of those rare names that s both exotic and simple'
// reOrdering('is an older name than annabel Amabel and a lot more distinctive') //'Amabel is an older name than annabel and a lot more distinctive'
// reOrdering('JoJo') // 'JoJo'
// reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z') // 'Z a b c d e f g h i j k l m n o p q r s t u v w x y'
// reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z') // 'N a b c d e f g h i j k l m o p q r s t u v w x y z'
