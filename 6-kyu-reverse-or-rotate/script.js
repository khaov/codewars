// Solution:

function revrot(str, sz) {
  let modifiedString = '';

  if (!sz <= 0 || !str === '' || !sz > str.length) {

    const numberOfFragments = Math.ceil(str.length / sz);

    for (let i = 0, index = 0; i < numberOfFragments; i++, index += sz) {
      const stringFragment = str.substr(index, sz);
      let modifiedFragment = ''

      const integerNumber = stringFragment.split('').reduce(function(prev, item){
        return prev + Number(Math.pow(item, 3));
      }, 0);

      if (stringFragment.length === sz) {

        if (integerNumber % 2 === 0) {
          modifiedFragment = stringFragment.split('').reverse().join('');
        } else {
          modifiedFragment = stringFragment.substr(1) + stringFragment.substr(0, 1);
        }

        modifiedString = modifiedString + modifiedFragment;
      }
    }
  }
  return modifiedString;
}

// Sample Tests:

revrot("123456987654", 6) // "234561876549"
revrot("123456987653", 6) // "234561356789"
revrot("66443875", 4) // "44668753"
revrot("66443875", 8) // "64438756"
revrot("664438769", 8) // "67834466"
revrot("123456779", 8) // "23456771"
revrot("", 8) // ""
revrot("123456779", 0) // ""
revrot("563000655734469485", 4) // "0365065073456944"
