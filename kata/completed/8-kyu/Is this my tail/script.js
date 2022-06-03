// Solution:

function correctTail(body, tail) {
  const sub = body.substr(body.length-(tail.length));

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}

// Sample Tests:

correctTail("Fox", "x")     // true
correctTail("Rhino", "o")   // true
correctTail("Meerkat", "t") // true
