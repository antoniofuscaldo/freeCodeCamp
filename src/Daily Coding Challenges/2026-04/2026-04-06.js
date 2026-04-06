/**

What Day Is It?

Given a Unix timestamp in milliseconds, return the day of the week.

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

function getDayOfWeek(timestamp) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    d = new Date(timestamp);
  return days[d.getUTCDay()];
}
