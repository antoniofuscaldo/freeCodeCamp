/**

P4ssw0rd Str3ngth!

Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.

*/

function checkStrength(password) {
  let rules = 0;

  if (password.length >= 8) rules++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) rules++;
  if (/\d/.test(password)) rules++;
  if (/[!@#$%^&*]/.test(password)) rules++;

  if (rules < 2) return "weak";
  if (rules < 4) return "medium";
  return "strong";
}
