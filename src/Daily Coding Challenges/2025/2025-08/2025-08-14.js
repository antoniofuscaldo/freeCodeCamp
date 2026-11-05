/**

S P A C E J A M

Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

Non-alphabetical characters should remain unchanged (except for spaces).

*/

function spaceJam(s) {
  const noSpaces = s.replace(/\s+/g, '');
  let transformed = '';
  for (const char of noSpaces) {
    if (/[a-zA-Z]/.test(char)) {
      transformed += char.toUpperCase();
    } else {
      transformed += char;
    }
  }
  return transformed.split('').join('  ');
}
