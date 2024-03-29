// Solution:

function oddRow(n) {
  let rowStart = Math.pow(n, 2) - (n - 1);
  let row = [rowStart];

  for(let i = 1; i < n; i++) {
    row.push(rowStart += 2);
  }

  return row;
}

// Sample Tests:

oddRow(1)   // [1]

oddRow(2)   // [3, 5]

oddRow(13)  // [157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 179, 181]

oddRow(19)  // [343, 345, 347, 349, 351, 353, 355, 357, 359, 361, 363, 365, 367, 369, 371, 373, 375, 377, 379]

oddRow(41)  // [1641, 1643, 1645, 1647, 1649, 1651, 1653,
            //  1655, 1657, 1659, 1661, 1663, 1665, 1667, 1669, 1671, 1673, 1675, 1677,
            //  1679, 1681, 1683, 1685, 1687, 1689, 1691, 1693, 1695, 1697, 1699, 1701,
            //  1703, 1705, 1707, 1709, 1711, 1713, 1715, 1717, 1719, 1721]
