/**

Jbelmud Text

Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.

*/

function jbelmu(text) {
  const words = text.split(' '),
    result = words.map((word) => {
      if (word.length <= 2) {
        return word;
      }
      const first = word[0],
        middle = word.slice(1, -1).split('').sort().join(''),
        last = word[word.length - 1];
      return first + middle + last;
    });
  return result.join(' ');
}
