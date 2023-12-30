// Solution:

function timeConvert(num) {
  if (num > 0) {
    let hours = Math.floor(num/60);
    let minutes = num % 60;

    return (hours.toString().length < 2 ? '0'+ hours : '' + hours) + ':'
         + ('00' + minutes).slice(-2);
  } else {
    return "00:00";
  }
}

// Sample Tests:

timeConvert(0)      // "00:00"
timeConvert(-6)     // "00:00"
timeConvert(8)      // '0'+0+':'+'0'+8
timeConvert(32)     // '0'+0+':'+32
timeConvert(75)     // '0'+1+':'+15
timeConvert(63)     // '0'+1+':'+'0'+3
timeConvert(134)    // '0'+2+':'+14
timeConvert(180)    // '0'+3+':'+'0'+0
timeConvert(970)    // 16+':'+10
timeConvert(565757) // 9429+':'+17
