// Solution:

function incrementString (strng) {
  let numberPart = '';
  let zerosPart = '';
  let stringPart = '';

  strng.split('').filter(function(item) {
    if (parseInt(item)) {
      numberPart = numberPart + item;
    } else if (item === '0') {
      zerosPart = zerosPart + item;
    } else {
      stringPart = stringPart + item;
    }
  });

  const increasedNumber = Number(numberPart) + 1;
  const increasedLength = String(increasedNumber).length;
  const sourceLength = numberPart.length

  if (increasedLength > sourceLength) {
    const diff = increasedLength - sourceLength;
    zerosPart = zerosPart.substring(diff);
  } else {
    zerosPart;
  }

  return increasedString = stringPart + zerosPart + increasedNumber;
}

// Sample Tests:

incrementString("foobar000") // "foobar001"
incrementString("foo") // "foo1"
incrementString("foobar001") // "foobar002"
incrementString("foobar99") // "foobar100"
incrementString("foobar099") // "foobar100"
incrementString("") // "1"
