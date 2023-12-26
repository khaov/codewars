// Solution:

function sctc(sin){
  let result = [];

  let cos = Number(Math.sqrt(1 - Math.pow(sin, 2)));
  let tg =  Number((sin / cos));
  let ctg = Number((cos / sin));

  result.push(Number(sin.toFixed(2)), Number(cos.toFixed(2)));

  if (tg  !== Infinity) { result.push(Number(tg.toFixed(2))) }
  if (ctg !== Infinity) { result.push(Number(ctg.toFixed(2))) }

  return result;
}

// Sample Tests:

sctc(1)                 // [1, 0.0, 0.0]
sctc(0.5)               // [0.5, 0.87, 0.58, 1.73]
sctc(Math.sqrt(3) / 2)  // [0.87, 0.5, 1.73, 0.58]
sctc(Math.sqrt(2) / 2)  // [0.71, 0.71, 1.0, 1.0]
sctc(0)                 // [0, 1.0, 0.0]
sctc(0.22)              // [0.22, 0.98, 0.23, 4.43]
sctc(0.15)              // [0.15, 0.99, 0.15, 6.59]
sctc(0.18)              // [0.18, 0.98, 0.18, 5.46]
sctc(0.2)               // [0.2, 0.98, 0.2, 4.9]
sctc(0.1)               // [0.1, 0.99, 0.1, 9.95]
