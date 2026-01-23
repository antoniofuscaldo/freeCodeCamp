/**
 *
Hex Validator

Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

Start with a #, and
be followed by either 3 or 6 hexadecimal characters.
Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).

*/

function isValidHex(str) {
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(str);
}
