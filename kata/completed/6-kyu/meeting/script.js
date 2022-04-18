// Solution:

function meeting(s) {
  let guestList =[];

  s.split(';').forEach(function(guest){
    let guestData = guest.split(":");
    guestList.push(`(${guestData[1].toUpperCase()}, ${guestData[0].toUpperCase()})`)
  });

  return guestList.sort().join('');
}

// Sample Tests:

meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
