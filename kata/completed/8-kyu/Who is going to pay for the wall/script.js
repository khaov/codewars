// Solution:

function whoIsPaying(name){
  return name.length > 2 ?
        [name, name.slice(0, 2)] :
        [name];
}

// Sample Tests:

whoIsPaying("Mexico")   // ["Mexico", "Me"]
whoIsPaying("Melania")  // ["Melania", "Me"]
whoIsPaying("Melissa")  // ["Melissa", "Me"]
whoIsPaying("Me")       // ["Me"]
whoIsPaying("")         // [""]
whoIsPaying("I")        // ["I"]
