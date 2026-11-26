/**

BuzzFizz
Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item in the array. A sequence is correct if:

Numbers that are multiples of 3 are replaced with "Fizz"
Numbers that are multiples of 5 are replaced with "Buzz"
Numbers that are multiples of both 3 and 5 are replaced with "FizzBuzz"
All other numbers remain as integers in ascending order, starting from 1.
The array must start at 1 and have no missing or extra elements.
Tests:
Waiting:1. isFizzBuzz([1, 2, "Fizz", 4]) should return true.
Waiting:2. isFizzBuzz([1, 2, 3, 4]) should return false.
Waiting:3. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7]) should return false.
Waiting:4. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]) should return false.
Waiting:5. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"]) should return false.
Waiting:6. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"]) should return false.
Waiting:7. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]) should return true.

*/

function isFizzBuzz(sequence) {
  return sequence.every((value, i) => {
    const n = i + 1;
    const expected =
      n % 15 === 0
        ? 'FizzBuzz'
        : n % 3 === 0
          ? 'Fizz'
          : n % 5 === 0
            ? 'Buzz'
            : n;
    return value === expected;
  });
}
