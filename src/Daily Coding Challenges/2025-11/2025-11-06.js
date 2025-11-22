/**

Weekday Finder

Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.

*/

function getWeekday(dateString) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let [year, month, day] = dateString.split('-').map(Number);

  if (month < 3) {
    month += 12;
    year -= 1;
  }

  const K = year % 100,
    J = Math.floor(year / 100),
    h =
      (day +
        Math.floor((13 * (month + 1)) / 5) +
        K +
        Math.floor(K / 4) +
        Math.floor(J / 4) +
        5 * J) %
      7,
    d = (h + 6) % 7;

  return days[d];
}
