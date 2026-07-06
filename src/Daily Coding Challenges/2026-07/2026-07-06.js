/**

lowercase words

Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.

*/

function getLowercaseWords(str) {
  return str
    .split(' ')
    .filter(Boolean)
    .filter((w) => /^[a-z]+$/.test(w))
    .join(' ');
}
