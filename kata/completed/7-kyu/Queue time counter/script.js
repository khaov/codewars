// queuers[pos] — количество желаемых билетов

// Пока число купленных нами билетов не равно 0 мы движемся по очереди
// в которой каждый клиент, тратя 1 минуту,
// покупает 1 билет, уменьшая собственное сило желаемых билетов на 1

// Solution:

function queue(queuers, pos){

  let time  = 0;

  for (let i = 0; queuers[pos]; i++){
    for (let j = 0; j < queuers.length; j++){
      if (queuers[pos] === 0){
        break
      } else {
        if (queuers[j] > 0 ){
          time++
          queuers[j]--
        }
      }
    }
  }

  return time

}

// Sample Tests:

queue([2, 5, 3, 6, 4], 0) // 6
queue([2, 5, 3, 6, 4], 1) // 18
queue([2, 5, 3, 6, 4], 2) // 12
queue([2, 5, 3, 6, 4], 3) // 20
queue([2, 5, 3, 6, 4], 4) // 17
