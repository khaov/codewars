// Solution:

function solution(a) {

  if (a.length !== 0 ) {
    let count = 0;

    for (let index = 0; index < a.length; index += a[index]) {

      if (index < 0) { break; }
      if (count > a.length) { return -1; }

      count++
    }

    return count;
  } else {
    return -1;
  }
}

// Sample Tests:

solution([1, 2, 2, -1]) //  4
solution([1, 2, 1, 5])  //  3
solution([1, 1, 1, 1])  //  4
solution([1, -1])       // -1
solution([-3])          //  1
