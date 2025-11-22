/**

Screen Time
Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

If any single day has 10 hours or more, it's too much.
If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
If the average of the seven days is greater than or equal to 6 hours, it's too much.

*/

function tooMuchScreenTime(hours) {
  for (const h of hours) {
    if (h >= 10) return true;
  }
  for (let i = 0; i <= hours.length - 3; i++) {
    const avg = (hours[i] + hours[i + 1] + hours[i + 2]) / 3;
    if (avg >= 8) return true;
  }
  const total = hours.reduce((sum, h) => sum + h, 0);
  if (total / 7 >= 6) return true;
  return false;
}
