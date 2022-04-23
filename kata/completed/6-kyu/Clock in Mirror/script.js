// Solution:

function WhatIsTheTime(timeInMirror) {
  let realHours = 0;
  let realMinutes = 0;

  let mirrorHours = Number(timeInMirror.split(':')[0]);
  let mirrorMinutes = Number(timeInMirror.split(':')[1]);

  realMinutes = 60 - mirrorMinutes;
  realHours = realMinutes === 60 ? 12 - mirrorHours : 12 - (mirrorHours + 1);

  let hours = realHours === 0 ? '12' : realHours === -1 ? '11' : realHours > 9 ? realHours : '0' + realHours;
  let minutes = realMinutes === 60 ? '00' : realMinutes > 9 ? realMinutes : '0' + realMinutes;
  return `${hours}:${minutes}`;
}

// Sample Tests:

WhatIsTheTime("06:35") // "05:25"
WhatIsTheTime("11:59") // "12:01"
WhatIsTheTime("12:02") // "11:58"
WhatIsTheTime("04:00") // "08:00"
WhatIsTheTime("06:00") // "06:00"
WhatIsTheTime("12:00") // "12:00"
