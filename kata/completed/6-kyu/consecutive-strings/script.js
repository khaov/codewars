// Solution:

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  } else {

    let result = ""

    const concatenateArray = strarr.map(function(word, index, array) {
      return array.slice(index, index + k).join('');
    });

    concatenateArray.forEach(function(item) {
      if (item.length > result.length) {
        result = item;
      }
    });

    return result;
  }
}

// Sample Tests:

longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2) // "folingtrashy"
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) // "abigailtheta"
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) // "oocccffuucccjjjkkkjyyyeehh"
longestConsec([], 3) // ""
longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) // "wlwsasphmxxowiaxujylentrklctozmymu"
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) // ""
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) // "ixoyx3452zzzzzzzzzzzz"
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) // ""
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) // ""
