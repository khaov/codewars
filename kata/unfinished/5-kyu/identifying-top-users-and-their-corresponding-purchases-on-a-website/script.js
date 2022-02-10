// Solution:

function idBestUsers() {

  const purchasesByMonth = Object.values(arguments);
  const sortPurchasesMonth = purchasesByMonth.sort((a, b) => b.length - a.length);

  const bestPurchasesMonth = sortPurchasesMonth[0];
  const anotherPurchases = sortPurchasesMonth.splice(1)

  const bestPurchasesUsers = bestPurchasesMonth.filter((user, id, list) => id === list.lastIndexOf(user))

  let uniqueUsers = []

  bestPurchasesUsers.forEach(function(user){
    let monthCounter = 0
    anotherPurchases.forEach(function(month){
      if(month.includes(user)){
        monthCounter++
      }
    })
    if (monthCounter === anotherPurchases.length) {
      uniqueUsers.push(user)
    }
  });

  uniqueUsers

  let statistics = new Object()

  uniqueUsers.forEach(function(uniqueId){

    let purchasesCounter = 0;

    bestPurchasesMonth.forEach(function(userId){
      if (uniqueId === userId){
        purchasesCounter++
      }
    });

    anotherPurchases.forEach(function(month){
      month.forEach(function(userId){
        if (uniqueId === userId){
          purchasesCounter++
        }
      })
    });

    statistics[uniqueId] = purchasesCounter
  })

  statistics

  const purchasesValues = Object.values(statistics).filter((item, index, array) => index === array.lastIndexOf(item))

  let sortedStatistics = []

  purchasesValues.forEach(function(value){
    let userStatistics = []
    let iserId = []
    Object.keys(statistics).forEach(function(key) {
      if(value === statistics[key]) {
        iserId.push(key)
      }
    })

    userStatistics.push(value)
    userStatistics.push(iserId.sort())

    sortedStatistics.push(userStatistics)
  })

  return sortedStatistics.sort((a, b) => b[0] - a[0])
}

// Sample Tests:

var a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
var a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
var a3 = ['A042', 'A025', 'B004'];
idBestUsers(a1, a2, a3) // [[5, ['A042']], [3, ['A025', 'B004']]

var a1 = ['A043', 'B004', 'A025', 'A042', 'C025'];
var a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044'];
var a3 = ['A041', 'A026', 'B005']
idBestUsers(a1, a2, a3) //  []

var a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
var a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
var a3 = ['A042', 'B004', 'A025', 'A042', 'C025', 'B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
var a4 = ['A042', 'A025', 'B004']
idBestUsers(a1, a2, a3, a4) // [[9, ['A042']], [5, ['A025', 'B004']]]
