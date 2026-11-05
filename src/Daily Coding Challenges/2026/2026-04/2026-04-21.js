/**

Odd Words
Given a string of words, return only the words with an odd number of letters.

Words in the given string will be separated by a single space.
Return the words separated by a single space.

*/

function getOddWords(str) {
  return str
    .split(' ')
    .filter((w) => w.length % 2 === 1)
    .join(' ');
}
