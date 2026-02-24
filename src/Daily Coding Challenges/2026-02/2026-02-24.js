/**

Business Day Count

Given a start date and an end date, return the number of business days between the two.

Given dates are in the format "YYYY-MM-DD".
Weekdays are business days (Monday through Friday).
Weekends are not business days (Saturday and Sunday).
Include both the start and end dates when counting.

*/

function countBusinessDays(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  let count = 0;

  for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) count++;
  }

  return count;
}
