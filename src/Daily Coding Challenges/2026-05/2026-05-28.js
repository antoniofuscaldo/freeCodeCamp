/**

FizzBuzz Count

Given a start and end number, count the number of fizz and buzz appearances in the range (inclusive).

Numbers divisible by 3 count as a fizz.
Numbers divisible by 5 count as a buzz.
Numbers divisible by both 3 and 5 count as both a fizz and a buzz.
Return an object or dictionary with the counts in the format: { fizz, buzz }.

*/

function fizzBuzzCount(start, end) {
  let fizz = 0,
    buzz = 0;
  for (let n = start; n <= end; n++) {
    if (n % 3 === 0) fizz++;
    if (n % 5 === 0) buzz++;
  }
  return { fizz, buzz };
}
