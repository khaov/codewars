// Solution:

function scrollingText(text) {
  let scrolling = [text.toUpperCase()];

  for(let i = 1; i < text.length; i++) {
    scrolling.push(scrolling[0].slice(i) + scrolling[0].slice(0, i))
  }

  return scrolling;
}

// Sample Tests:

scrollingText("codewars") // ["CODEWARS", "ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE", "ARSCODEW", "RSCODEWA", "SCODEWAR"]
scrollingText("abc")      // ["ABC","BCA","CAB"]
