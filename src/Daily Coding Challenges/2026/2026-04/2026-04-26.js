/**

FizzBuzz Explosion

Given an integer, return the number of steps it takes to turn the word "fizzbuzz" into a string with at least the given number of "z"'s using the following rules:

Start with the string "fizzbuzz".
Each step, apply the standard FizzBuzz rules using the letter position in the string (the first "f" is position 1).
If the letter position is divisible by 3, replace the letter with "fizz"
If it's divisible by 5, replace the letter with "buzz"
If it's divisible by 3 and 5, replace the letter with "fizzbuzz"
So after 1 step, "fizzbuzz" turns into "fifizzzbuzzfizzzz", which has 9 "z"'s.

*/

function explodeFizzbuzz(targetZCount) {
  let s = 'fizzbuzz';
  let steps = 0;

  while (true) {
    let out = [];
    for (let i = 0; i < s.length; i++) {
      const pos = i + 1;
      if (pos % 15 === 0) out.push('fizzbuzz');
      else if (pos % 3 === 0) out.push('fizz');
      else if (pos % 5 === 0) out.push('buzz');
      else out.push(s[i]);
    }
    s = out.join('');
    steps++;
    if ((s.match(/z/g) || []).length >= targetZCount) return steps;
  }
}
