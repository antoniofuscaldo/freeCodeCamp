/**

Acronym Builder

Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in the order they are given.
The acronym should not contain any spaces.

Tests:
Waiting:1. buildAcronym("Search Engine Optimization") should return "SEO".
Waiting:2. buildAcronym("Frequently Asked Questions") should return "FAQ".
Waiting:3. buildAcronym("National Aeronautics and Space Administration") should return "NASA".
Waiting:4. buildAcronym("Federal Bureau of Investigation") should return "FBI".
Waiting:5. buildAcronym("For your information") should return "FYI".
Waiting:6. buildAcronym("By the way") should return "BTW".
Waiting:7. buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") should return "AUHWPOTIMSH".

*/

export function buildAcronym(str) {
  if (typeof str !== 'string' || str.trim() === '') return '';

  const ignore = new Set(['a', 'for', 'an', 'and', 'by', 'of']);
  const words = str.split(/\s+/);
  const letters = [];

  for (let i = 0; i < words.length; i++) {
    const cleaned = words[i].replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, '');
    if (cleaned === '') continue;

    const lower = cleaned.toLowerCase();
    if (i !== 0 && ignore.has(lower)) continue;

    letters.push(cleaned[0].toUpperCase());
  }

  return letters.join('');
}
