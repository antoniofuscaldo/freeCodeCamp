/**

Word Counter

Given a sentence string, return the number of words that are in the sentence.

Words are any sequence of non-space characters and are separated by a single space.

*/

function countWords(sentence) {
  if (sentence.trim() === '') return 0;
  return sentence.split(' ').length;
}
