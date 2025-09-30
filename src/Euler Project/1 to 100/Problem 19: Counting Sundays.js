/**

Problem 19: Counting Sundays

You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/

function countingSundays(firstYear, lastYear) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  let dayOfWeek = 1;
  let count = 0;

  for (let year = 1900; year <= lastYear; year++) {
    for (let month = 0; month < 12; month++) {
      if (year >= firstYear && dayOfWeek === 0) {
        count++;
      }
      let days = daysInMonth[month];
      if (month === 1 && isLeap(year)) days = 29;
      dayOfWeek = (dayOfWeek + days) % 7;
    }
  }

  return count;
}

countingSundays(1943, 1946);
