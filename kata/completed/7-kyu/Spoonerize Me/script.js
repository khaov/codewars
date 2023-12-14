// Solution:

function spoonerize(words) {
  return words
    .split(' ')
    .map((word, index, phrase) =>
      (index === 0 ? phrase[1].slice(0, 1) : phrase[0].slice(0, 1)) + word.slice(1)
    )
    .join(' ');
}

// Sample Tests:

spoonerize("nit picking")   // "pit nicking"
spoonerize("wedding bells") // "bedding wells"
spoonerize("jelly beans")   // "belly jeans"