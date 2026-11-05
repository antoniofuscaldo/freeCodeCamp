/**

Birthday Countdown

Given today's date and a birthday, return the number of days until the person's next birthday.

Today's date is given as a string in "YYYY-MM-DD" format, with leading zeros, for example: "2026-07-16".
The birthday is given as a string in "M/D" format, without leading zeros, for example: "9/7".
If today is their birthday, return the number of days until their next birthday (not 0).
Leap years should be accounted for.

Tests:
Waiting:1. daysUntilBirthday("2026-07-16", "9/7") should return 53.
Waiting:2. daysUntilBirthday("2026-07-16", "3/22") should return 249.
Waiting:3. daysUntilBirthday("2026-07-16", "7/16") should return 365.
Waiting:4. daysUntilBirthday("2024-02-28", "3/1") should return 2.
Waiting:5. daysUntilBirthday("2023-04-24", "12/30") should return 250.
Waiting:6. daysUntilBirthday("2024-03-01", "2/29") should return 1460.
Waiting:7. daysUntilBirthday("2096-03-01", "2/29") should return 2920.

*/

export function daysUntilBirthday(today, birthday) {
  const msPerDay = 24 * 60 * 60 * 1000;

  const [ty, tm, td] = today.split('-').map(Number);
  const [bm, bd] = birthday.split('/').map(Number);

  function isLeap(y) {
    return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
  }

  const todayUtc = Date.UTC(ty, tm - 1, td);

  if (bm === 2 && bd === 29) {
    let year = ty;
    while (true) {
      if (isLeap(year)) {
        const candidateUtc = Date.UTC(year, 1, 29);
        if (candidateUtc > todayUtc) {
          return Math.round((candidateUtc - todayUtc) / msPerDay);
        }
      }
      year++;
    }
  }

  let candidateYear = ty;
  let candidateUtc = Date.UTC(candidateYear, bm - 1, bd);

  if (candidateUtc <= todayUtc) {
    candidateYear++;
    candidateUtc = Date.UTC(candidateYear, bm - 1, bd);
  }

  return Math.round((candidateUtc - todayUtc) / msPerDay);
}
