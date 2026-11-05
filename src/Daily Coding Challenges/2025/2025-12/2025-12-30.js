/**

 Sum the String

 Given a string containing digits and other characters, return the sum of all numbers in the string.

 Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
 Ignore any non-digit characters.

 */

function stringSum(str) {
  let current = '',
    sum = 0;

  for (const char of str) {
    if (char >= '0' && char <= '9') {
      current += char;
    } else if (current !== '') {
      sum += Number(current);
      current = '';
    }
  }

  if (current !== '') {
    sum += Number(current);
  }

  return sum;
}
