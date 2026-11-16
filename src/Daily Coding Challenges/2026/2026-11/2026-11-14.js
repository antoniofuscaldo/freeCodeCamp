/**

Is It the Weekend?

Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.

Tests:
Waiting:1. daysUntilWeekend("2025-11-14") should return "1 day until the weekend.".
Waiting:2. daysUntilWeekend("2025-01-01") should return "3 days until the weekend.".
Waiting:3. daysUntilWeekend("2025-12-06") should return "It's the weekend!".
Waiting:4. daysUntilWeekend("2026-01-27") should return "4 days until the weekend.".
Waiting:5. daysUntilWeekend("2026-09-07") should return "5 days until the weekend.".
Waiting:6. daysUntilWeekend("2026-11-29") should return "It's the weekend!".

*/

export function daysUntilWeekend(dateString) {
  const [y, m, d] = dateString.split('-').map(Number);
  const day = new Date(Date.UTC(y, m - 1, d)).getUTCDay();

  if (day === 0 || day === 6) return "It's the weekend!";

  const days = (6 - day + 7) % 7;
  return `${days} ${days === 1 ? 'day' : 'days'} until the weekend.`;
}
