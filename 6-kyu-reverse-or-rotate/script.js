// Solution:

function revrot(str, sz) {
  const numberOfFragments = Math.ceil(str.length / sz);
  for (let i = 0, index = 0; i < numberOfFragments; i++, index += sz) {
    const stringFragment = str.substr(index, sz);

    const integerNumber = stringFragment.split('').reduce(function(prev, item){
      return prev + Number(Math.pow(item, 3));
    }, 0);

    if (stringFragment.length === sz) {

      if (integerNumber % 2 === 0) {
        const modifiedFragment = stringFragment.split('').reverse().join('');
      } else {
        const modifiedFragment = stringFragment.substr(1) + stringFragment.substr(0, 1);
      }



    } else {

    }
  }

}

// Sample Tests:

// revrot("123456987654", 6) // "234561876549"
 revrot("123456987653", 6) // "234561356789"
// revrot("66443875", 4) // "44668753"
