// Solution:

function cookie(x){
  const message = 'Who ate the last cookie? It was'

  switch(true) {
    case typeof x == 'string':
      return message + ' Zach!';
      break;
    case typeof x == 'number':
      return message + ' Monica!';
      break;
    default:
      return message + ' the dog!';
  }
}

// Sample Tests:

cookie("Ryan")  // "Who ate the last cookie? It was Zach!"
cookie(26)      // "Who ate the last cookie? It was Monica!"
cookie(2.3)     // "Who ate the last cookie? It was Monica!"
cookie(true)    // "Who ate the last cookie? It was the dog!"
