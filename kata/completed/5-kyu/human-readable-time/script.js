// Solution:

function humanReadable (seconds) {
  let readableTime = []

  function compileReadableTime(item) {
    if (item.toString().length === 1) {
      return readableTime.push('0' + item)
    } else {
      return readableTime.push(item)
    }
  }

  const hh = Math.floor(seconds / 3600);
  const mm =  Math.floor((seconds - hh * 3600) / 60);
  const ss = seconds - hh * 3600 - mm * 60;

  compileReadableTime(hh);
  compileReadableTime(mm);
  compileReadableTime(ss);

  return readableTime.join(':')
}

// Sample Tests:

humanReadable(0)      // '00:00:00'
humanReadable(59)     // '00:00:59'
humanReadable(60)     // '00:01:00'
humanReadable(90)     // '00:01:30'
humanReadable(3599)   // '00:59:59'
humanReadable(3600)   // '01:00:00'
humanReadable(45296)  // '12:34:56'
humanReadable(86399)  // '23:59:59'
humanReadable(86400)  // '24:00:00'
humanReadable(359999) // '99:59:59'
