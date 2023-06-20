// Solution:

function removeConsecutiveDuplicates(string) {
    return string.split(' ').filter((word, index, array) => word !== array[index + 1]).join(' ');
}

// Sample Tests:

removeConsecutiveDuplicates(""); // ""
removeConsecutiveDuplicates("alpha"); // "alpha"
removeConsecutiveDuplicates("alpha alphaalpha alphaalphaalpha"); // "alpha alphaalpha alphaalphaalpha"
removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta");
                         // "alpha beta gamma delta alpha beta gamma delta"

removeConsecutiveDuplicates("alpha alpha alpha alpha"); // "alpha"
removeConsecutiveDuplicates("alpha beta alpha"); // "alpha beta alpha"
removeConsecutiveDuplicates("alpha alphabeta alphagamma"); // "alpha alphabeta alphagamma"
removeConsecutiveDuplicates("alpha alpha beta alpha alpha"); // "alpha beta alpha"
removeConsecutiveDuplicates("alpha beta beta"); // "alpha beta"