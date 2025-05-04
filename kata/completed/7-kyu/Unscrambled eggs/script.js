// Solution:

function unscrambleEggs(word){
  return word.split('egg').join('');
}

// Sample Tests:

unscrambleEggs("ceggodegge heggeregge") //  "code here"
unscrambleEggs("FeggUNegg KeggATeggA")  //  "FUN KATA"