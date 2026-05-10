/**

ISBN-13 Validator

Given a string, determine if it is a valid ISBN-13 number.

A valid ISBN-13:

Contains only digits and hyphens
Has exactly 13 digits after removing hyphens
Passes the following check:
Multiply each digit by 1 or 3, alternating (multiply the first digit by 1, the second by 3, the third by 1, and so on).
The sum of the results must be divisible by 10.

*/

function isValidIsbn13(str) {
  if (!/^[0-9-]+$/.test(str)) return false;

  const digits = str.replace(/-/g, '');
  if (digits.length !== 13) return false;

  const sum = [...digits].reduce(
    (a, c, i) => a + Number(c) * (i % 2 ? 3 : 1),
    0,
  );

  return sum % 10 === 0;
}
