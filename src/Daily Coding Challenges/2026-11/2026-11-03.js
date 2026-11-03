/**

Word Counter

Given a sentence string, return the number of words that are in the sentence.

Words are any sequence of non-space characters and are separated by a single space.

Tests:
Waiting:1. countWords("Hello world") should return 2.
Waiting:2. countWords("The quick brown fox jumps over the lazy dog.") should return 9.
Waiting:3. countWords("I like coding challenges!") should return 4.
Waiting:4. countWords("Complete the challenge in JavaScript and Python.") should return 7.
Waiting:5. countWords("The missing semi-colon crashed the entire internet.") should return 7.

*/

function countWords(sentence) {
  return sentence.split(' ').length;
}
