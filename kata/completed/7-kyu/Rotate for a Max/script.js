// Solution:

function maxRot(n) {
    let str = n.toString();
    let arr = [str];

    for (let i = 0; i <= str.length - 1; i++) {
        str = str.slice(0, i) + str.slice(i + 1) + str[i];
        arr.push(str.split().join());
    }

    return Math.max.apply(null, arr);
}

// Sample Tests:

maxRot(38458215)    // 85821534
maxRot(195881031)   // 988103115
maxRot(896219342)   // 962193428
maxRot(69418307)    // 94183076
