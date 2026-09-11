/**

Reverse Sentence

Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.

In the given string, words can be separated by one or more spaces.
The returned string should only have one space between words.

Tests:
Waiting:1. reverseSentence("world hello") should return "hello world".
Waiting:2. reverseSentence("push commit git") should return "git commit push".
Waiting:3. reverseSentence("npm  install  sudo") should return "sudo install npm".
Waiting:4. reverseSentence("import    default   function  export") should return "export function default import".

*/

export function reverseSentence(sentence) {
  return sentence.trim().split(/\s+/).reverse().join(' ');
}
