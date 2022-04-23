// Solution:

function noOdds( values ){
  return values.filter(function(number){
    return number%2 === 0
  });
}

noOdds( [0,1] )     // [0]
noOdds( [0,1,2,3] ) // [0,2]
