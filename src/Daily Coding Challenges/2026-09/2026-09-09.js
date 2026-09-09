/**

Unique Characters

Given a string, determine if all the characters in the string are unique.

Uppercase and lowercase letters should be considered different characters.

Tests:
Waiting:1. allUnique("abc") should return true.
Waiting:2. allUnique("aA") should return true.
Waiting:3. allUnique("QwErTy123!@") should return true.
Waiting:4. allUnique("~!@#$%^&*()_+") should return true.
Waiting:5. allUnique("hello") should return false.
Waiting:6. allUnique("freeCodeCamp") should return false.
Waiting:7. allUnique("!@#*$%^&*()aA") should return false.

*/

export function allUnique(str) {
  const seen = new Set();

  for (const ch of str) {
    if (seen.has(ch)) return false;
    seen.add(ch);
  }

  return true;
}
