/**

Unique Characters

Given a string, determine if all the characters in the string are unique.

Uppercase and lowercase letters should be considered different characters.

*/

function allUnique(str) {
  const seen = new Set();
  for (const char of str) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }
  return true;
}
