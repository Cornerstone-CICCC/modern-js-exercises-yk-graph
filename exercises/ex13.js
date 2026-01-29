/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const MonthNames = [
  { number: "01", name: "January" },
  { number: "02", name: "February" },
  { number: "03", name: "March" },
  { number: "04", name: "April" },
  { number: "05", name: "May" },
  { number: "06", name: "June" },
  { number: "07", name: "July" },
  { number: "08", name: "August" },
  { number: "09", name: "September" },
  { number: "10", name: "October" },
  { number: "11", name: "November" },
  { number: "12", name: "December" },
];

function getMonthName(monthNumber) {
  const month = MonthNames.find(obj => obj.number === monthNumber);
  return month ? month.name : null;
}

function getDayWithSuffix(day) {
  const dayNum = Number(day);

  switch (dayNum) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return dayNum + "th";
  }
}

const talkingCalendar = function (date) {
  if (typeof date !== "string") {
    return "Invalid input: date must be a string in the format YYYY/MM/DD";
  }
  
  const separatedDate = date.split("/"); // ["2017", "12", "02"]
  const year = separatedDate[0];
  const month = getMonthName(separatedDate[1]);
  const day = getDayWithSuffix(separatedDate[2]);

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
