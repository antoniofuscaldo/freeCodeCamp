/**

Basic Functions Exercise D

Write a function, named lastLetter, that takes a string as a parameter and returns the last letter of the string.

*/

function lastLetter(str) {
  if (!str) return '';
  return str.charAt(str.length - 1);
}
