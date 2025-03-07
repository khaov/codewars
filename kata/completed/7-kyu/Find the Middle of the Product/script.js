// Solution:

function findMiddle(str){
  const digits = '0123456789'.split('');

  const product = typeof str === 'string' ?
    str.split('').some(item => digits.includes(item)) ?
      str.split('')
          .filter(item => digits.includes(item))
          .reduce((num, sum) => sum *= num, 1) :
      -1 :
    -1;

  const middle = product !== -1 ?
    product.toString().length % 2 === 0 ?
      product.toString().split('')
              .slice(product.toString().length / 2 - 1)
              .slice(0, product.toString().length / 2).join(''):
      product.toString().split('')
             .slice(product.toString().length / 2, product.toString()
             .length)[0] :
      -1;

    return Number(middle);
}

// Sample Tests:

"s7d8j"
"5-]&w}1_6`{~ae$q^w[%hkhh{=q@ra"
findMiddle('s7d8jd9');                                // 0
findMiddle('58jd9fgh/fgh6s.,sdf');                    // 16
findMiddle(['n', 'o', 't', ' ', 'a', ' ', 'string']); // -1
