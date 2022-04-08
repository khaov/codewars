// Solution:

function sqInRect(lng, wdth) {
  if (lng !== wdth) {
    let squares = []
    let length = lng
    let width = wdth

    while (length !== 0 && width !== 0) {
      let square = 0;

      if (length > width) {
        square = width
        length -= square
      } else {
        square = length
        width -= square
      }
      squares.push(square)
    }
    return squares
  } else {
    return null
  }
}

// Sample Tests:

sqInRect(5, 5)   // null
sqInRect(5, 3)   // [3, 2, 1, 1]
sqInRect(3, 5)   // [3, 2, 1, 1]
sqInRect(20, 14) // [14, 6, 6, 2, 2, 2]
