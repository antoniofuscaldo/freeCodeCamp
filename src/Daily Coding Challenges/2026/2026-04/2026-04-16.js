/**

String Math

Given a string with numbers and other characters, perform math on the numbers based on the count of non-digit characters between the numbers.

If the count of characters separating two numbers is even, use addition.
If it's odd, use subtraction.
Consecutive digits form a single number.
Operations are applied left to right.
Ignore leading and trailing characters that aren't digits.
For example, given "3ab10c8", return 5. Add 3 and 10 to get 13 because there's an even number of characters between them. Then subtract 8 from 13 because there's an odd number of characters between the result and 8.

*/

function doMath(str) {
  let cur = '',
    gap = 0,
    havePrev = false,
    inNumber = false,
    result = null;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch >= '0' && ch <= '9') {
      if (!inNumber) {
        inNumber = true;
        cur = ch;
      } else {
        cur += ch;
      }
    } else if (inNumber) {
      const num = Number(cur);
      if (!havePrev) {
        result = num;
        havePrev = true;
      } else if (gap % 2 === 0) result += num;
      else result -= num;
      inNumber = false;
      cur = '';
      gap = 1;
    } else if (havePrev) {
      gap++;
    }
  }

  if (inNumber) {
    const num = Number(cur);
    if (!havePrev) {
      result = num;
    } else if (gap % 2 === 0) result += num;
    else result -= num;
  }

  return result === null ? 0 : result;
}
