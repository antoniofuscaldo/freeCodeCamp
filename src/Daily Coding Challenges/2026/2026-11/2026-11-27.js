/**

What's My Age Again?

Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

Assume all birthdays are valid dates before November 27th, 2025.
Return the age as an integer.
Be sure to account for whether the person has already had their birthday in 2025.

Tests:
Waiting:1. calculateAge("2000-11-20") should return 25.
Waiting:2. calculateAge("2000-12-01") should return 24.
Waiting:3. calculateAge("2014-10-25") should return 11.
Waiting:4. calculateAge("1994-01-06") should return 31.
Waiting:5. calculateAge("1994-12-14") should return 30.

*/

function calculateAge(birthday) {
  const [year, month, day] = birthday.split('-').map(Number);
  let age = 2025 - year;
  if (month > 11 || (month === 11 && day > 27)) age--;
  return age;
}
