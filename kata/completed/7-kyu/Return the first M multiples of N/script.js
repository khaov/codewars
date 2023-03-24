// Solution:

function multiples(m, n){
    let multiplesArray = [];

    for (let i = 1; i <= m; ++i) {
        multiplesArray.push(n * i);
    }

    return multiplesArray;
}

// Sample Tests:

multiples(3, 5) // [5, 10, 15]
