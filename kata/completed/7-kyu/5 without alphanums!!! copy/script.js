// Solution:

function calc(x){
  let digitsSum = (total) => total.split('').reduce((sum, num) => sum += Number(num), 0)

  let total1 = x.split('').map(num => num.charCodeAt(0)).join('');
  let total2 = total1.split('').map(num => num === '7' ? num = '1' : num).join('');

  return digitsSum(total1) - digitsSum(total2);
}

// Sample Tests:

calc('abcdef') // 6
calc('ifkhchlhfd') // 6
calc('aaaaaddddr') // 30
calc('jfmgklf8hglbe') // 6
calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') // 96
