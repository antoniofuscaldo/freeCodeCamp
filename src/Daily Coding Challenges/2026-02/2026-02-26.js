/**

Letter and Number Count

Given a string, return a message with the count of how many letters and numbers it contains.

Letters are A-Z and a-z.
Numbers are 0-9.
Ignore all other characters.
Return "The string has X letters and Y numbers.", where "X" is the count of letters and "Y" is the count of numbers. If either count is 1, use the singular form for that item. E.g: "1 letter" instead of "1 letters" and "1 number" instead of "1 numbers".

*/

function countLettersAndNumbers(str) {
  let letters = 0;
  let numbers = 0;

  for (const c of str) {
    if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) letters++;
    else if (c >= '0' && c <= '9') numbers++;
  }

  const l = letters === 1 ? '1 letter' : `${letters} letters`;
  const n = numbers === 1 ? '1 number' : `${numbers} numbers`;

  return `The string has ${l} and ${n}.`;
}
