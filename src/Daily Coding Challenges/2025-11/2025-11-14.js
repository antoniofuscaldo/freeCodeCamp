/**

Is It the Weekend?

Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.

*/

function daysUntilWeekend(dateString) {
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
    weekday = (h + 6) % 7;

  if (weekday === 6 || weekday === 0) {
    return "It's the weekend!";
  }
  const daysLeft = 6 - weekday;
  return daysLeft === 1 ? '1 day until the weekend.' : `${daysLeft} days until the weekend.`;
}
