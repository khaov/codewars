// Solution:

function noonerize(numbers) {
  if (numbers.every(item => typeof item === 'number')) {  
    let array = numbers.map((number, index, arguments) =>
        (index === 0 ?
        arguments[1].toString().slice(0, 1) :
        arguments[0].toString().slice(0, 1)
        ) + number.toString().slice(1)
      )

    return Math.abs(Number(array[1]) - Number(array[0]));
  } else {
    return 'invalid array';
  }
}

// Sample Tests:

noonerize([12, 34])           // 18
noonerize([55, 63])           // 12
noonerize([357, 579])         // 178
noonerize([1000000, 9999999]) // 7000001