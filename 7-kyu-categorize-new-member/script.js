// Solution:

function openOrSenior(data){
  let membership = data.map(function(memder) {
    const memberAge = memder[0];
    const memberHandicap = memder[1];
    if (memberAge >= 55 && memberHandicap > 7) {
      return memder = 'Senior';
    } else {
      return memder = 'Open';
    }
  });
  return membership;
}

// Sample Tests:

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]); // ['Open', 'Senior', 'Open', 'Senior']