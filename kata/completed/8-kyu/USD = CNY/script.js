// Solution:

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

// Sample Tests:

usdcny(15), '101.25 Chinese Yuan'
usdcny(465), '3138.75 Chinese Yuan'
