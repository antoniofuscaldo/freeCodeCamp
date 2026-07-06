/**

FizzBuzz Count

Given a start and end number, count the number of fizz and buzz appearances in the range (inclusive).

Numbers divisible by 3 count as a fizz.
Numbers divisible by 5 count as a buzz.
Numbers divisible by both 3 and 5 count as both a fizz and a buzz.
Return an object or dictionary with the counts in the format: { fizz, buzz }.

Tests:
Waiting:1. fizzBuzzCount(1, 11) should return {fizz: 3, buzz: 2}.
Waiting:2. fizzBuzzCount(14, 41) should return {fizz: 9, buzz: 6}.
Waiting:3. fizzBuzzCount(24, 100) should return {fizz: 26, buzz: 16}.
Waiting:4. fizzBuzzCount(-635, -14) should return {fizz: 207, buzz: 125}.
Waiting:5. fizzBuzzCount(-5432, 6789) should return {fizz: 4074, buzz: 2444}.

*/

export function fizzBuzzCount(start, end) {
  let fizz = 0,
    buzz = 0;
  for (let n = start; n <= end; n++) {
    if (n % 3 === 0) fizz++;
    if (n % 5 === 0) buzz++;
  }
  return { fizz, buzz };
}
