/**

String Mirror

Given two strings, determine if the second string is a mirror of the first.

A string is considered a mirror if it contains the same letters in reverse order.
Treat uppercase and lowercase letters as distinct.
Ignore all non-alphabetical characters.

Tests:
Waiting:1. isMirror("helloworld", "helloworld") should return false.
Waiting:2. isMirror("Hello World", "dlroW olleH") should return true.
Waiting:3. isMirror("RaceCar", "raCecaR") should return true.
Waiting:4. isMirror("RaceCar", "RaceCar") should return false.
Waiting:5. isMirror("Mirror", "rorrim") should return false.
Waiting:6. isMirror("Hello World", "dlroW-olleH") should return true.
Waiting:7. isMirror("Hello World", "!dlroW !olleH") should return true.

*/

export function isMirror(str1, str2) {
  const clean1 = str1.replace(/[^A-Za-z]/g, '');
  const clean2 = str2.replace(/[^A-Za-z]/g, '');
  const reversed1 = clean1.split('').reverse().join('');
  return reversed1 === clean2 && clean1 !== clean2;
}
