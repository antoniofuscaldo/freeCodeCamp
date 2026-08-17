/**

Base Check

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

The string may contain integers, and uppercase or lowercase characters.
The check should be case-insensitive.
The base can be any number 2-36.
A number is valid if every character is a valid digit in the given base.
Example of valid digits for bases:
Base 2: 0-1
Base 8: 0-7
Base 10: 0-9
Base 16: 0-9 and A-F
Base 36: 0-9 and A-Z

Tests:
Waiting:1. isValidNumber("10101", 2) should return true.
Waiting:2. isValidNumber("10201", 2) should return false.
Waiting:3. isValidNumber("76543210", 8) should return true.
Waiting:4. isValidNumber("9876543210", 8) should return false.
Waiting:5. isValidNumber("9876543210", 10) should return true.
Waiting:6. isValidNumber("ABC", 10) should return false.
Waiting:7. isValidNumber("ABC", 16) should return true.
Waiting:8. isValidNumber("Z", 36) should return true.
Waiting:9. isValidNumber("ABC", 20) should return true.
Waiting:10. isValidNumber("4B4BA9", 16) should return true.
Waiting:11. isValidNumber("5G3F8F", 16) should return false.
Waiting:12. isValidNumber("5G3F8F", 17) should return true.
Waiting:13. isValidNumber("abc", 10) should return false.
Waiting:14. isValidNumber("abc", 16) should return true.
Waiting:15. isValidNumber("AbC", 16) should return true.
Waiting:16. isValidNumber("z", 36) should return true.

*/

export function isValidNumber(n, base) {
  if (typeof n !== 'string') return false;
  if (base < 2 || base > 36) return false;

  const s = n.trim();
  if (s.length === 0) return false;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    let value;

    if (ch >= '0' && ch <= '9') {
      value = ch.charCodeAt(0) - '0'.charCodeAt(0);
    } else {
      const up = ch.toUpperCase();
      if (up >= 'A' && up <= 'Z') {
        value = up.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        return false;
      }
    }

    if (value >= base) return false;
  }

  return true;
}
