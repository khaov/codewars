// Solution:

function triangle(row) {
  const combinations = {
    BG: 'R',
    GB: 'R',
    RG: 'B',
    GR: 'B',
    BR: 'G',
    RB: 'G',
  }

  return row.split('')
            .map((color, index, colors) =>
              color !== colors[index + 1] && index !== colors.length - 1?
              combinations[color + colors[index + 1]] :
              color
            )
}

// Sample Tests:

triangle('GB') // 'R'
triangle('RRR') // 'R'
triangle('RGBG') // 'B'
triangle('RBRGBRB') // 'G'
triangle('RBRGBRBGGRRRBGBBBGG') // 'G'
triangle('B') // 'B'
