/**

Odd or Even Day

Given a timestamp (number of milliseconds since the Unix epoch), return:

"odd" if the day of the month for that timestamp is odd.
"even" if the day of the month for that timestamp is even.
For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

*/

function oddOrEvenDay(timestamp) {
  const d = new Date(timestamp).getUTCDate();
  return d % 2 === 0 ? 'even' : 'odd';
}
