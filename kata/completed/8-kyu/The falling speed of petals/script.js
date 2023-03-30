// Solution:

function sakuraFall(v) {
    const speed = v;
    const height = 80 * 5;
    return v > 0 ? height / speed : 0;
}

// Sample Tests:

sakuraFall(5)   // 80
sakuraFall(10)  // 40    
sakuraFall(-1)  // 0