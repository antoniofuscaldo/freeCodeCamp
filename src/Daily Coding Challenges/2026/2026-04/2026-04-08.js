/**

FizzBuzz Validator

Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

In a valid FizzBuzz sequence:

Multiples of 3 are replaced with "Fizz".
Multiples of 5 are replaced with "Buzz".
Multiples of both 3 and 5 are replaced with "FizzBuzz".
All other numbers remain as integers.

*/

function isFizzBuzz(arr) {
  let start = null;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      start = arr[i] - i;
      break;
    }
  }
  if (start === null) return false;

  for (let i = 0; i < arr.length; i++) {
    const n = start + i,
      fizz = n % 3 === 0,
      buzz = n % 5 === 0;

    if (fizz && buzz) {
      if (arr[i] !== 'FizzBuzz') return false;
    } else if (fizz) {
      if (arr[i] !== 'Fizz') return false;
    } else if (buzz) {
      if (arr[i] !== 'Buzz') return false;
    } else if (arr[i] !== n) return false;
  }
  return true;
}
