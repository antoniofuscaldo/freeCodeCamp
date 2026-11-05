/**

String Compression

Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

Only consecutive duplicates are compressed.
Words are separated by single spaces.
For example, given "yes yes yes please", return "yes(3) please".

*/

function compressString(sentence) {
  if (!sentence) return '';
  const words = sentence.split(' '),
    result = [];
  let count = 1;
  for (let i = 1; i <= words.length; i++) {
    if (words[i] === words[i - 1]) {
      count++;
    } else {
      result.push(count > 1 ? `${words[i - 1]}(${count})` : words[i - 1]);
      count = 1;
    }
  }
  return result.join(' ');
}
