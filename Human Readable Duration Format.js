/* 
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

function formatDuration(seconds) {
  let years = "00";
  let days = "00";
  let hours = "00";
  let mins = "00";
  let secs = "00";
  // years
  // 31536000 seconds
  if (seconds - 31536000 >= 0) {
    years = Math.floor(seconds / 31536000);
    if (seconds >= 31536000) {
      seconds -= 31536000 * years;
    }
  }

  // days
  // 84600 seconds
  if (seconds - 86400 >= 0) {
    // console.log("seconds: ",seconds)
    days = Math.floor(seconds / 86400);
    // console.log("days: ",days)
    if (seconds >= 86400) {
      seconds -= 86400 * days;
    }
  }
  // hours
  if (seconds - 3600 >= 0) {
    hours = Math.floor(seconds / 3600);
    if (seconds >= 3600) {
      seconds -= 3600 * hours;
    }
  }
  // minutes
  if (seconds - 60 >= 0) {
    mins = Math.floor(seconds / 60);
    if (seconds >= 60) {
      seconds -= 60 * mins;
    }
  }

  // seconds
  secs = seconds;
  let working = {};
  if (years > 1) {
    working.years = years;
  } else if (years > 0) {
    working.year = years;
  }
  if (days > 1) {
    working.days = days;
  } else if (days > 0) {
    working.day = days;
  }
  if (hours > 1) {
    working.hours = hours;
  } else if (hours > 0) {
    working.hour = hours;
  }
  if (mins > 1) {
    working.minutes = mins;
  } else if (mins > 0) {
    working.minute = mins;
  }
  if (secs > 1) {
    working.seconds = secs;
  } else if (secs > 0) {
    working.second = secs;
  }

  let output = [];

  let semifinal = Object.entries(working);

  for (let i = 0, j = semifinal.length; i < semifinal.length; i++, j--) {
    if (semifinal[i][1] > 0) {
      output.push(semifinal[i][1]);
      output.push(" ");
      if (i < semifinal.length - 2) {
        output.push(semifinal[i][0], ", ");
      } else {
        output.push(semifinal[i][0], " ");
      }
    }
  }
  if (output.length > 4) {
    output.splice(output.length - 4, 0, "and ");
  }
  if (output[output.length -1] == " ") {
    output.pop()
  }
  
  if (output.length === 0) {
    return "now";
  }
  console.log(output.join(""))
  return output.join("");
}

formatDuration(15731080);
// formatDuration(3662123432123);
