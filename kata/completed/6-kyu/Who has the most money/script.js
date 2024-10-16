// Solution:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

function mostMoney(students) {
  let statistics = [];

  students.forEach(student =>
    statistics.push(
      [
        student.name,
        student.fives * 5 + student.tens * 10 + student.twenties * 20
      ]
    ),
  )

  const leaderboard = statistics.sort((prev, next) => next[1] - prev[1]);

  if (leaderboard.length > 1) {
    return  leaderboard[0][1] === leaderboard[1][1] ?
    "all" : leaderboard[0][0];
  } else {
    return leaderboard[0][0];
  }
}


// Sample Tests:

// "What happens if one student has the most money?"

mostMoney([andy, stephen, eric, david, phil]) // "Eric"
mostMoney([cam, geoff, andy, stephen, eric, david, phil]) // "Eric"

// "What happens if there is only one student?"

mostMoney([andy]) // "Andy"
mostMoney([stephen]) // "Stephen"

// "What happens if all students have the same amount of money?"

mostMoney([cam, geoff]) // "all"
mostMoney([david, cam, geoff]) // "all"
