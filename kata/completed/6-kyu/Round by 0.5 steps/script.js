// Solution:

function solution(n){

  // return Math.round(n*2)/2;

  const integer =  Math.trunc(n);
  const remainder = n % 1;

  switch (true) {
    case remainder < 0.25 :
      return integer;
      break;
    case (remainder > 0.25 && remainder < 0.5) || (remainder > 0.5 && remainder < 0.75) :
      return integer + 0.5;
      break;
    case remainder <= 0.25 || remainder >= 0.75 :
      return integer + 1;
      break;
    default:
      return n;
  }
}

// Sample Tests:

solution(4.2) // 4
solution(4.4) // 4.5
solution(4.6) // 4.5
solution(4.8) // 5
