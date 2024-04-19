/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  let hours = "00";
  let mins = "00";
  let secs = "00";
  // Hours
  if (seconds - 3600 >= 0) {
    hours = Math.floor(seconds / 3600);
    if (hours.toString().length < 2) {
      hours = "0" + hours;
    }
    if (seconds >= 3600) {
      seconds -= 3600 * hours;
    }
  }

  // Minutes
  if (seconds - 60 >= 0) {
    mins = Math.floor(seconds / 60);
    if (mins.toString().length < 2) {
      mins = "0" + mins;
    }
    // Seconds
    seconds -= 60 * mins;
  }
  secs = seconds;
  if (seconds.toString().length < 2) {
    secs = "0" + seconds;
  }
  return hours + ":" + mins + ":" + secs;
}
