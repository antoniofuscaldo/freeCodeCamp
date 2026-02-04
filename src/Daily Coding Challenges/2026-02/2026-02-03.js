/**

String Mirror

Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.

*/

function mirror(str) {
  return str + str.split('').reverse().join('');
}
