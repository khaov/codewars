// Solution:

function createBox(m, n) {

  function sliceRow (row, num){
    const rowStart = row.slice(0, num);
    const rowCenter = row.slice(num, row.length - num)
           .map(number => number = num + 1);
    const rowEnd = row.slice(row.length - num);

    const iterationRow = rowStart.concat(rowCenter).concat(rowEnd);

    if(iterationRow.length !== row.length) {
      return row;
    } else {
      return iterationRow;
    }
  }

  let baseRow = new Array(m).fill(1);
  let baseBox = [baseRow];

  const iterationQuantity = Math.floor(n / 2);

  if (iterationQuantity !== 0) {
    for (let i = 1; i < iterationQuantity; i++) {
      baseRow = sliceRow(baseRow, i);
      baseBox.push(baseRow);
  }

  return n % 2 === 0 ?
         baseBox.concat([...baseBox].reverse()) :
         [...baseBox].concat([sliceRow(baseRow, iterationQuantity)]).concat([...baseBox].reverse());
  } else {
    return [baseRow];
  }
}

// Sample Tests:

createBox(7, 8);
createBox(6, 4);
createBox(10, 9);
createBox(5, 8);
createBox(1, 6);
createBox(12, 15);
createBox(10, 1);
