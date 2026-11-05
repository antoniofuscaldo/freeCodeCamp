/**

Digit Rotation Escape

Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.

A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.

Check rotation 0 (the given number) first.
Given numbers won't contain any zeros.
Return the first rotation number if one is found, or "none" if not.

*/

function getRotation(n) {
  const s = String(n),
    len = s.length;
  let cur = s;
  for (let i = 0; i < len; i++) {
    if (Number(cur) % len === 0) return i;
    cur = cur.slice(1) + cur[0];
  }
  return 'none';
}
