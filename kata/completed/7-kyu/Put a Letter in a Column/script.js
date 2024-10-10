// Solution:

function buildRowText(index, character) {
  let columns = Array(9).fill('| ');

  return [...columns]
    .map((column, columnIndex) =>
      columnIndex === index ?
      `|${character}` : column
    )
    .concat('|').join('');
}

// Sample Tests:

buildRowText(2, 'A') // '| | |A| | | | | | |'
buildRowText(0, 'A') // '|A| | | | | | | | |'
buildRowText(8, 'A') // '| | | | | | | | |A|'
