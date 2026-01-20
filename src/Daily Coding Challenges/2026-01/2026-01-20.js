/**

Consonant Case

Given a string representing a variable name, convert it to consonant case using the following rules:

All consonants should be converted to uppercase.
All vowels (a, e, i, o, u in any case) should be converted to lowercase.
All hyphens (-) should be converted to underscores (_).

*/

function toConsonantCase(str) {
  return str
    .replace(/-/g, '_')
    .replace(/[aeiou]/gi, (c) => c.toLowerCase())
    .replace(/[^aeiou_]/gi, (c) => c.toUpperCase());
}
