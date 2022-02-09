// Solution:

function idBestUsers(a1, a2, a3) {

  let purchasesMonth = Object.values(arguments)
  let sortPurchasesMonth = purchasesMonth.sort((a, b) => b.length - a.length)
  let mostPurchasesMonth = sortPurchasesMonth[0]
  let morePurchasesMonth = sortPurchasesMonth.splice(1)

  let uniqueUsersPurchases = []

  mostPurchasesMonth.forEach(function(user){
    morePurchasesMonth.forEach(function(month){
      if(month.includes(user)){
        return uniqueUsersPurchases.push(user)
      }
    })
  });

  let uniqueUsers = uniqueUsersPurchases.filter(function(user, id, users){
    return id === users.lastIndexOf(user)
  });

  let statistics = new Object()

  uniqueUsers.forEach(function(uniqueId){

    let purchases = 1;

    uniqueUsersPurchases.forEach(function(userId){
      if (userId === uniqueId){
        purchases++
      }
    });

    statistics[uniqueId] = purchases

  })

  statistics

}

// Sample Tests:

var a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
var a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
var a3 = ['A042', 'A025', 'B004'];
idBestUsers(a1, a2, a3) // [[5, ['A042']], [3, ['A025', 'B004']]

// var a1 = ['A043', 'B004', 'A025', 'A042', 'C025'];
// var a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044'];
// var a3 = ['A041', 'A026', 'B005']
// idBestUsers(a1, a2, a3) //  []

// a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
// a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
// a3 = ['A042', 'B004', 'A025', 'A042', 'C025', 'B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
// var a4 = ['A042', 'A025', 'B004']
// idBestUsers(a1, a2, a3, a4) // [[9, ['A042']], [5, ['A025', 'B004']]]
