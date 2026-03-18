/**

Largest Number

Given a string of numbers separated by various punctuation, return the largest number.

The given string will only contain numbers and separators.
Separators can be commas (","), exclamation points ("!"), question marks ("?"), colons (":"), or semi-colons (";").

*/

function largestNumber(str) {
  return Math.max(...str.split(/[,!?:;]+/).map(Number));
}
