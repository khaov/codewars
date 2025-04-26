// Solution:

function countMe(data){
  if (data.split('').every(symbol => symbol * 1 == symbol.toString())) {
    let repeats = '';
    let count = 1;

    for(let index = 0; index < data.length; index++) {
      if (data[index] == data[index +1]) {
        count++;
      } else {
        repeats += `${count}${data[index]}`;
        count = 1;
      }
    }

    return repeats;
  } else {
    return '';
  }
}

// Sample Tests:

countMe('1123')           // '211213'
countMe('1')              // '11'
countMe('11')             // '21'
countMe('a')              // ''
countMe('a123')           // ''
countMe('21')             // '1211'
countMe('1211')           // '111221'
countMe('12322212223443') // '111213321132132413'
countMe('')               // ''
countMe('123a')           // ''