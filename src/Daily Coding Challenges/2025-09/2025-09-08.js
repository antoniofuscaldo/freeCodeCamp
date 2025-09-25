/**

Acronym Builder

Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in the order they are given.
The acronym should not contain any spaces.

*/

function buildAcronym(str) {
  const ignore = new Set(['a', 'for', 'an', 'and', 'by', 'of']);
  let words = str.trim().split(/\s+/);
  let acronym = '';
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (i === 0) {
      acronym += words[i][0].toUpperCase();
    } else if (!ignore.has(word)) {
      acronym += words[i][0].toUpperCase();
    }
  }
  return acronym;
}
