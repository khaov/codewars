// Solution:

function formatMoney(amount){
  return `$${amount.toFixed(2)}`
}

// Sample Tests:

formatMoney(39.99)  // '$39.99'
formatMoney(3)      // '$3.00'
formatMoney(3.1)    // '$3.10'
