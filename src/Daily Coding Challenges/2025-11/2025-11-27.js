/**

What's My Age Again?

Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

Assume all birthdays are valid dates before November 27th, 2025.
Return the age as an integer.
Be sure to account for whether the person has already had their birthday in 2025.

*/

function calculateAge(birthday) {
  const [by, bm, bd] = birthday.split('-').map(Number),
    birth = new Date(by, bm - 1, bd),
    target = new Date(2025, 10, 27);

  let age = target.getFullYear() - birth.getFullYear();

  const hadBirthdayThisYear =
    target.getMonth() > birth.getMonth() ||
    (target.getMonth() === birth.getMonth() && target.getDate() >= birth.getDate());

  if (!hadBirthdayThisYear) age--;

  return age;
}
