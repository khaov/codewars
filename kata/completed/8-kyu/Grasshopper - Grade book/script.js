// Solution:

function getGrade (s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3

  switch(true) {
    case(score >= 90 && score <= 100) : return 'A'; break;
    case(score >= 80 && score < 90)   : return 'B'; break;
    case(score >= 70 &&  score < 80)  : return 'C'; break;
    case(score >= 60 &&  score < 70)  : return 'D'; break;
    case(score >= 0 && score < 60)    : return 'F'; break;
  }
}

// Sample Tests:

getGrade(95,90,93)  // 'A'
getGrade(100,85,96) // 'A'
getGrade(92,93,94)  // 'A'
getGrade(70,70,100) // 'B'
getGrade(82,85,87)  // 'B'
getGrade(84,79,85)  // 'B'
getGrade(89,89,90)  // 'B'
getGrade(70,70,70)  // 'C'
getGrade(75,70,79)  // 'C'
getGrade(60,82,76)  // 'C'
getGrade(65,70,59)  // 'D'
getGrade(66,62,68)  // 'D'
getGrade(58,62,70)  // 'D'
getGrade(44,55,52)  // 'F'
getGrade(48,55,52)  // 'F'
getGrade(58,59,60)  // 'F'
