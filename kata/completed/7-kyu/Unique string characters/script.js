// Solution:

function solve(a, b) {
    function filter(first, second) {
        return first.split('').filter(letter => second.split('').lastIndexOf(letter) === -1).join('');
    }

    return filter(a, b) + filter(b, a)
};

// Sample Tests:

solve("xyab","xzca")    // "ybzc"
solve("xyabb","xzca")   // "ybbzc"
solve("abcd","xyz")     // "abcdxyz"
solve("xxx","xzca")     // "zca"
