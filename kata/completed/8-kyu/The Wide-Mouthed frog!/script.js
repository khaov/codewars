// Solution:

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide"
}

// Sample Tests:

mouthSize("toucan")     // "wide"
mouthSize("ant bear")   // "wide"
mouthSize("alligator")  // "small"
