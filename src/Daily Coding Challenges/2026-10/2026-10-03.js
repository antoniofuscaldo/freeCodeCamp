/**

Passw0rd Str3ngth!

Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.

Tests:
Waiting:1. checkStrength("123456") should return "weak".
Waiting:2. checkStrength("pass!!!") should return "weak".
Waiting:3. checkStrength("Qwerty") should return "weak".
Waiting:4. checkStrength("PASSWORD") should return "weak".
Waiting:5. checkStrength("PASSWORD!") should return "medium".
Waiting:6. checkStrength("PassWord%^!") should return "medium".
Waiting:7. checkStrength("qwerty12345") should return "medium".
Waiting:8. checkStrength("S3cur3P@ssw0rd") should return "strong".
Waiting:9. checkStrength("C0d3&Fun!") should return "strong".

*/

function checkStrength(password) {
  let rules = 0;

  if (password.length >= 8) rules++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) rules++;
  if (/\d/.test(password)) rules++;
  if (/[!@#$%^&*]/.test(password)) rules++;

  if (rules === 4) return 'strong';
  if (rules >= 2) return 'medium';
  return 'weak';
}
