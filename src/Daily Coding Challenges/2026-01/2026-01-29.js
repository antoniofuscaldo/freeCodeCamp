/**

Letters-Numbers

Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number, or a number to a letter.

*/

function separateLettersAndNumbers(str) {
  let r = str[0];
  for (let i = 1; i < str.length; i++) {
    const a = isNaN(str[i - 1]);
    const b = isNaN(str[i]);
    if (a !== b) r += '-';
    r += str[i];
  }
  return r;
}
