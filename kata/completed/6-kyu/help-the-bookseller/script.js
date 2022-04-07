// Solution:

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length !== 0 && listOfCat.length !== 0) {
    let list = [];

    listOfCat.forEach(function(category) {

      let matchOfCat = listOfArt.filter(function(art) {
        return category === art[0]
      });

      let quantityofBooks = matchOfCat.map(function(code) {
        return code.split(' ')[1]
      })

      if (quantityofBooks.length !== 0) {
        let quantity = quantityofBooks.reduce(function(sum, num) {
          return sum = sum + Number(num);
        }, 0);

        list.push(`(${category} : ${quantity})`)
      } else {
        list.push(`(${category} : 0)`)
      }
    });

    return list.join(' - ');
  } else {
    return ""
  }
}

// Sample Tests:

stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]) // "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
