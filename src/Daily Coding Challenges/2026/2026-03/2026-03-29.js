/**

ISBN-10 Validator

Given a string, determine if it's a valid ISBN-10.

An ISBN-10 consists of hyphens ("-") and 10 other characters. After removing the hyphens ("-"):

The first 9 characters must be digits, and
The final character may be a digit or the letter "X", which represents the number 10.
To validate it:

Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
Add all the results together.
If the total is divisible by 11, it's valid.

*/

function isValidIsbn10(str) {
  const s = str.replace(/-/g, '');
  if (s.length !== 10) return false;

  for (let i = 0; i < 9; i++) {
    if (s[i] < '0' || s[i] > '9') return false;
  }

  const last = s[9] === 'X' ? 10 : s[9];
  if (last < 0 || last > 10 || isNaN(last)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += (i + 1) * Number(s[i]);
  }
  sum += 10 * Number(last);

  return sum % 11 === 0;
}
