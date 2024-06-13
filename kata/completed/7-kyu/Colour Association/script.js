// Solution:

function colourAssociation(array){
  return array.map(colour => colour = { [colour[0]]: colour[1] })
}

// Sample Tests:

colourAssociation([["white", "goodness"], ["blue", "tranquility"]]) // [{white:"goodness"},{blue:"tranquility"}]
colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]) // [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]
