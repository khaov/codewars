// Solution:

function solution(fullText, searchText) {
    return fullText.split(searchText).length - 1;
}

// Sample Tests:

solution('abcdeb','b')  // 2
solution('abc','b')     // 1
solution('abbc','bb')   // 1
