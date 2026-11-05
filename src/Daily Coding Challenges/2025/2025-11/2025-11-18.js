/**

100 Characters

Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.

*/

function oneHundred(chars) {
  if (chars.length === 0) return '';

  let result = '';
  while (result.length < 100) {
    result += chars;
  }

  return result.slice(0, 100);
}
