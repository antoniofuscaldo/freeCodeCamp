/**

Kaprekar's Routine

Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.

Kaprekar's routine works as follows:

Arrange the digits in descending order to form the largest number
Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
Subtract the smaller from the larger
Repeat with the new number

*/

function kaprekar(n) {
  let s = String(n).padStart(4, '0');
  if (s === '6174') return 0;
  let prev = null,
    count = 0;
  while (true) {
    const desc = s
      .split('')
      .sort((a, b) => b - a)
      .join('');
    const asc = s.split('').sort().join('');
    const next = String(Number(desc) - Number(asc)).padStart(4, '0');
    count++;
    if (next === '6174') return count;
    if (next === s || next === prev) return 0;
    prev = s;
    s = next;
    if (count > 100) return 0;
  }
}
