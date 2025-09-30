/**

Spam Detector

Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:

A represents the country code and can be any number of digits.
BBB represents the area code and will always be three digits.
CCC and DDDD represent the local number and will always be three and four digits long, respectively.
Determine if it's a spam number based on the following criteria:

The country code is greater than 2 digits long or doesn't begin with a zero (0).
The area code is greater than 900 or less than 200.
The sum of first three digits of the local number appears within last four digits of the local number.
The number has the same digit four or more times in a row (ignoring the formatting characters).

*/

function isSpam(number) {
  let digits = number.replace(/\D/g, "");
  let match = number.match(/^\+(\d+)\s\((\d{3})\)\s(\d{3})-(\d{4})$/);
  if (!match) return true;
  let [, country, area, first, last] = match;
  if (country.length > 2 || country[0] !== "0") return true;
  let areaNum = parseInt(area);
  if (areaNum > 900 || areaNum < 200) return true;
  let sumFirst = first.split("").reduce((a, b) => a + parseInt(b), 0);
  if (last.includes(sumFirst.toString())) return true;
  if (/(.)\1{3,}/.test(digits)) return true;
  return false;
}
