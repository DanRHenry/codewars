//! Incomplete
/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {

    let minutes = 0;
    let hours = seconds / 3600;
    if (hours > 99) {
        minutes = hours - 99 * 60
    } else {
        minutes = seconds / 60 - hours;
    }
    if (minutes > 99)
    console.log(hours, ":", minutes, ":", secs)

    return '';
  }

  humanReadable(525601)