// Solution:

function dropCap(n) {
  return n.split(" ")
          .map(word => word.length > 2 ? word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase() : word)
          .join(" ");
}

// Sample Tests:

dropCap('Apple Banana')                                                                     // "Apple Banana"
dropCap('Apple')                                                                            // "Apple"
dropCap('')                                                                                 // ""
dropCap('of')                                                                               // "of"
dropCap('Revelation of the contents outraged American public opinion, and helped generate') // "Revelation of The Contents Outraged American Public Opinion, And Helped Generate"
dropCap('more  than    one space between words')                                            // "More  Than    One Space Between Words
dropCap('  leading spaces')                                                                 // "  Leading Spaces
dropCap('trailing spaces   ')                                                               // "Trailing Spaces
dropCap('ALL CAPS CRAZINESS')                                                               // "All Caps Craziness
dropCap('rAnDoM CaPs CrAzInEsS')                                                            // "Random Caps Craziness
