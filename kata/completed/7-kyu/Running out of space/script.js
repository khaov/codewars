// Solution:

function spacey(array) {
  let resultArray = [];
  let unitedWord = "";

  for (let i = 0; i < array.length; i++){
    unitedWord = unitedWord + array[i]
    resultArray.push(unitedWord)
  }

  return resultArray;
}

// Sample Tests:

spacey(['kevin', 'has','no','space']) // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
spacey(['this','cheese','has','no','holes']) // ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);
