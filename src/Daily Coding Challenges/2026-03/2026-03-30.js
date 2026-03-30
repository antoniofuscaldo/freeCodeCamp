/**

Due Date

Given a date string, return the date 9 months in the future.

The given and return strings have the format "YYYY-MM-DD".
If the month nine months into the future doesn't contain the original day number, return the last day of that month.

*/

function getDueDate(dateStr) {
  const [Y, M, D] = dateStr.split('-').map(Number);
  const totalMonths = M + 8;
  const newY = Y + Math.floor(totalMonths / 12);
  const newM = (totalMonths % 12) + 1;

  const lastDay = new Date(newY, newM, 0).getDate();
  const day = Math.min(D, lastDay);

  const mm = String(newM).padStart(2, '0');
  const dd = String(day).padStart(2, '0');

  return `${newY}-${mm}-${dd}`;
}
