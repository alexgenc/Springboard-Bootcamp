/**
 * 
 * Turn a string of 24h time into words.

  You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

  Examples of the output we’d like:

  Input	Expected Output
  00:00	midnight
  00:12	twelve twelve am
  01:00	one o’clock am
  06:01	six oh one am
  06:10	six ten am
  06:18	six eighteen am
  06:30	six thirty am
  10:34	ten thirty four am
  12:00	noon
  12:09	twelve oh nine pm
  23:23	eleven twenty three pm
 * 
*/

const lowNumNames = [
  "zero", "one", "two", "three", 
  "four", "five", "six", "seven", 
  "eight", "nine", "ten", "eleven", 
  "twelve", "thirteen", "fourteen", 
  "fifteen", "sixteen", "seventeen", 
  "eighteen", "nineteen"
];

// Helper function to convert hours into text. All results will be between 1 and 12 inclusive since we store period of time separately.
const convertHoursToText = (hours) => {
  let result;

  // If hours is < 10, remove the 0. 06 => 6
  hours = hours < 10 ? hours[1] : hours;

  // Check for edge case
  if (hours[0] === "0") {
    result = lowNumNames[12];
  } else {
    result = hours > 12 ? lowNumNames[hours - 12] : lowNumNames[hours];
  }
  
  return result;
}

// Helper function to convert minutes into text.
const convertMinutesToText = (minutes) => {
  // Check for edge case 
  if (minutes === "00") return "o'clock";
  
  let result;

  const tensNames = [
    "twenty", "thirty", "forty", "fifty", 
    "sixty", "seventy", "eighty", "ninety"
  ];

  if (minutes < 10) {
    result = "oh " + lowNumNames[minutes[1]]
  } else if (minutes >= 10 && minutes < lowNumNames.length) {
    result = lowNumNames[minutes];
  } else {
    let tens = Math.floor(minutes / 10);
    let ones = minutes % 10;

    if (tens <= 9) {
      result = tensNames[tens - 2];
      
      if (ones > 0) {
        result += " " + lowNumNames[ones];
      }
    }
  }

  return result;
}

const timeWord = (timeStr) => {

  if (timeStr === "00:00") return "midnight";
  if (timeStr === "12:00") return "noon";

  // Separate hour and minutes
  let timeInput = timeStr.split(":");
  let hour = timeInput[0];
  let minutes = timeInput[1];


  // Store period of time
  let period = hour >= 12 ? "pm" : "am"

  // Convert hour and minutes into text
  let hourText = convertHoursToText(hour);
  let minutesText = convertMinutesToText(minutes);
  
  result = `${hourText} ${minutesText} ${period}`

  return result;
}

module.exports = timeWord;