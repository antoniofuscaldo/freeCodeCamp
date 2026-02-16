/**

Basic Functions Exercise C

Write a function, named capitalize, that takes a string as an parameter and returns a new string with the first letter capitalized.

*/

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
