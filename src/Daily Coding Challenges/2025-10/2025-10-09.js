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

*/

function moonPhase(dateString) {
  const reference = new Date("2000-01-06");
  const target = new Date(dateString);
  const diffDays = Math.floor((target - reference) / (1000 * 60 * 60 * 24));
  const dayInCycle = (diffDays % 28) + 1;

  if (dayInCycle >= 1 && dayInCycle <= 7) return "New";
  if (dayInCycle >= 8 && dayInCycle <= 14) return "Waxing";
  if (dayInCycle >= 15 && dayInCycle <= 21) return "Full";
  return "Waning";
}
