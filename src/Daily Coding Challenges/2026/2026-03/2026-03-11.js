/**

Word Length Converter

Given a string of words, return a new string where each word is replaced by its length.

Words in the given string will be separated by a single space
Keep the spaces in the returned string.
For example, given "hello world", return "5 5".

*/

function convertWords(str) {
  return str
    .split(' ')
    .map((word) => word.length)
    .join(' ');
}
