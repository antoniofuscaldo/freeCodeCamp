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

Tests:
Waiting:1. getWeekday("2025-11-06") should return Thursday.
Waiting:2. getWeekday("1999-12-31") should return Friday.
Waiting:3. getWeekday("1111-11-11") should return Saturday.
Waiting:4. getWeekday("2112-12-21") should return Wednesday.
Waiting:5. getWeekday("2345-10-01") should return Monday.

*/

export function getWeekday(dateString) {
  const [y, m, d] = dateString.split('-').map(Number);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
}
