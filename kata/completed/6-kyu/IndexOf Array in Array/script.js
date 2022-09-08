// Solution:

var searchArray = function (arrayToSearch, query) {
  if (
    arrayToSearch.every(item => Array.isArray(item) && item.length === 2) &&
    (Array.isArray(query) && query.length === 2)
  ) {
    return arrayToSearch.map(item => item.toString()).indexOf(query.toString());
  } else {
    throw new Error();
  }
}

// Sample Tests:

// valid array & valid query

var bigArray = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];

var searchFor = [9,20];
searchArray(bigArray,searchFor) // 2

searchFor = [1,12];
searchArray(bigArray,searchFor) // -1

searchFor = [7,2];
searchArray(bigArray, searchFor) // 1

// invalid array & valid query

bigArray = [[1,2],[3,4],[5,6],[7,8,9]];

searchFor = [1,2];
searchArray(bigArray,searchFor) // throw Error

bigArray = [1,2,3,4,5,6];

searchFor = [1,2];
searchArray(bigArray,searchFor) // throw Error

// valid array & invalid query

bigArray = [[1,2],[3,4],[5,6],[7,8]];

searchFor = [9,2,1];
searchArray(bigArray,searchFor) // throw Error

searchFor = 5;
searchArray(bigArray,searchFor) // throw Error
