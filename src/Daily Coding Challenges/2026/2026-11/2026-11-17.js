/**

Fingerprint Test

Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase letters (a-z).
Two fingerprints are considered a match if:
They are the same length.
The number of differing characters does not exceed 10% of the fingerprint length.

Tests:
Waiting:1. isMatch("helloworld", "helloworld") should return true.
Waiting:2. isMatch("helloworld", "helloworlds") should return false.
Waiting:3. isMatch("helloworld", "jelloworld") should return true.
Waiting:4. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return true.
Waiting:5. isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return true.
Waiting:6. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return false.

*/

function isMatch(fingerprintA, fingerprintB) {
  if (fingerprintA.length !== fingerprintB.length) return false;

  let diff = 0;
  for (let i = 0; i < fingerprintA.length; i++) {
    if (fingerprintA[i] !== fingerprintB[i]) diff++;
  }

  return diff <= fingerprintA.length / 10;
}
