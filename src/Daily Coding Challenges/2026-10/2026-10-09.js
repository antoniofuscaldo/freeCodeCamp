/**

Space Week Day 6: Moon Phase

For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

"New": days 1 - 7
"Waxing": days 8 - 14
"Full": days 15 - 21
"Waning": days 22 - 28
After day 28, the cycle repeats with day 1, a new moon.

Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
You will not be given any dates before the reference date.
Return the correct phase as a string.
Note: Day 1 represents the day of the new moon, meaning 0 days have passed since the last new moon.

Tests:
Waiting:1. moonPhase("2000-01-12") should return "New".
Waiting:2. moonPhase("2000-01-13") should return "Waxing".
Waiting:3. moonPhase("2014-10-15") should return "Full".
Waiting:4. moonPhase("2012-10-21") should return "Waning".
Waiting:5. moonPhase("2022-12-14") should return "New".

*/

export function moonPhase(dateString) {
  const day =
    (Math.floor((Date.parse(dateString) - Date.parse('2000-01-06')) / 864e5) %
      28) +
    1;
  return day <= 7
    ? 'New'
    : day <= 14
      ? 'Waxing'
      : day <= 21
        ? 'Full'
        : 'Waning';
}
