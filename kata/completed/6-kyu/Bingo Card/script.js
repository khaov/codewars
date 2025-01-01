// Solution:

function getCard() {

    function numbersRange(start, stop, amt, column) {
      return Array.from({ length: (stop - start) / 2 }, (_, index) => start + index)
                  .sort(() => Math.random() - 0.5)
                  .slice(0, amt)
                  .map(number => (column + number).toString())
    }

    return numbersRange( 1, 15, 5, 'B')
   .concat(numbersRange(16, 30, 5, 'I'))
   .concat(numbersRange(31, 45, 4, 'N'))
   .concat(numbersRange(46, 60, 5, 'G'))
   .concat(numbersRange(61, 75, 5, 'O'))
}

// Sample Tests:

getCard()
