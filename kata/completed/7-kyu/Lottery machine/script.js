// Solution:

function lottery(str) {
  const integers = str.replace(/\D+/g,"");

  return integers.length ?
    integers.split("").filter((number, index, array) =>
      index === array.indexOf(number)
    ).join("") :
    "One more run!";
}

// Sample Tests:

lottery("wQ8Hy0y5m5oshQPeRCkG") //  "805"
lottery("ffaQtaRFKeGIIBIcSJtg") //  "One more run!"
