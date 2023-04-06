// Solution:

function sortMyString(S) {
    let oddPart = [];
    let evenPart = [];

    S.split('').forEach((letter, index) => index % 2 === 0 ? evenPart.push(letter) : oddPart.push(letter))

    return `${evenPart.join('')} ${oddPart.join('')}`
}

// Sample Tests:

sortMyString("CodeWars")        // "CdWr oeas"
sortMyString("YCOLUE'VREER")    // "YOU'RE CLEVER"
