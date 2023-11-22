// Solution:

function oddBall(arr){
  return arr.filter(item => typeof(item) === 'number')
            .some(number => number === arr.indexOf("odd"));
}

// Sample Tests:

oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"])  // true
oddBall(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"])   // false
oddBall(["even",10,"odd",2,"even"])                                       // true
