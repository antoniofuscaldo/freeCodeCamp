/**

Last Letter

Given a string, return the letter from the string that appears last in the alphabet.

If two or more letters tie for the last in the alphabet, return the first one.
Ignore all non-letter characters.

*/

function getLastLetter(str) {
  let best = null;
  for (const c of str) {
    const l = c.toLowerCase();
    if (l >= 'a' && l <= 'z') {
      if (best === null || l > best.toLowerCase()) best = c;
    }
  }
  return best === null ? '' : best;
}
