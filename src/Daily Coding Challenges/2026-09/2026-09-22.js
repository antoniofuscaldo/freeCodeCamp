/**

Digits vs Letters

Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.

Tests:
Waiting:1. digitsOrLetters("abc123") should return "tie".
Waiting:2. digitsOrLetters("a1b2c3d") should return "letters".
Waiting:3. digitsOrLetters("1a2b3c4") should return "digits".
Waiting:4. digitsOrLetters("abc123!@#DEF") should return "letters".
Waiting:5. digitsOrLetters("H3110 W0R1D") should return "digits".
Waiting:6. digitsOrLetters("P455W0RD") should return "tie".

*/

export function digitsOrLetters(str) {
  let digits = 0;
  let letters = 0;

  for (const ch of str) {
    if (/[0-9]/.test(ch)) digits++;
    else if (/[a-zA-Z]/.test(ch)) letters++;
  }

  if (digits > letters) return 'digits';
  if (letters > digits) return 'letters';
  return 'tie';
}
