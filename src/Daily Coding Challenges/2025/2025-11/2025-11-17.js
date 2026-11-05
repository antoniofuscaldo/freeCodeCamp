/**

Fingerprint Test

Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase letters (a-z).
Two fingerprints are considered a match if:
They are the same length.
The number of differing characters does not exceed 10% of the fingerprint length.

*/

function isMatch(fingerprintA, fingerprintB) {
  if (fingerprintA.length !== fingerprintB.length) return false;

  let differences = 0;
  for (let i = 0; i < fingerprintA.length; i++) {
    if (fingerprintA[i] !== fingerprintB[i]) differences++;
  }

  return differences <= Math.floor(fingerprintA.length * 0.1);
}
