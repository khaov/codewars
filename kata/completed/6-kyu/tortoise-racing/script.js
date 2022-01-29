// Solution:

function race(v1, v2, g) {

  const sourceTime = g / (v2-v1);

  if (v2 > v1) {

    let catchUpTime = []

    const hh = Math.floor(sourceTime);
    catchUpTime.push(hh);

    const mm = Math.floor((sourceTime * 60) % 60);
    catchUpTime.push(mm);

    const ss = Math.floor((sourceTime * 3600) % 60);
    catchUpTime.push(ss);

    return catchUpTime

  } else {
    return null
  }

}

// Sample Tests:

race(720, 850, 70)  // [0, 32, 18]
race(80, 91, 37)    // [3, 21, 49]
race(80, 100, 40)   // [2, 0, 0]
