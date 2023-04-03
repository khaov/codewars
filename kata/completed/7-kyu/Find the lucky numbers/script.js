// Solution:

var filterLucky=x=>{
    return x.filter(number =>number.toString().includes(7));
}

// Sample Tests:

filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]) // [7,70,17]
filterLucky([71,9907,69])                   // [71,9907]