// Solution:

function recycle(array) {

  function sort(objectMaterial) {
    return array.filter(item =>
        item.material === objectMaterial ||
        item.secondMaterial === objectMaterial
      )
      .map(item => item.type);
  }

  return [
    sort('paper'),
    sort('glass'),
    sort('organic'),
    sort('plastic')
  ];
}

// Sample Tests:

let a = [
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];

recycle(a);

// [
//   ['wine bottle', 'amazon box', 'beer bottle'],
//   ['wine bottle', 'beer bottle'],
//   ['rotten apples', 'out of date yogurt'],
//   ['out of date yogurt']
// ]
