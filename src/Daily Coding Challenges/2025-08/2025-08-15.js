/**

Jbelmud Text

Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.

*/

function jbelmu(text) {
  let words = text.split(" ");
  let result = words.map((word) => {
    if (word.length <= 2) {
      return word;
    }
    let first = word[0];
    let middle = word.slice(1, -1).split("").sort().join("");
    let last = word[word.length - 1];
    return first + middle + last;
  });
  return result.join(" ");
}
