/**

Secret Number

Given a secret number and a guess, determine if the guess is correct.

Return:

"higher" if the secret number is higher than the guess.
"lower" if the secret number is lower than the guess.
"you got it!" if the guess is correct.

Tests:
Waiting:1. guessNumber(50, 30) should return "higher".
Waiting:2. guessNumber(85, 99) should return "lower".
Waiting:3. guessNumber(2026, 2026) should return "you got it!".
Waiting:4. guessNumber(92904, 11283) should return "higher".
Waiting:5. guessNumber(230495, 423920) should return "lower".
Waiting:6. guessNumber(120349, 120349) should return "you got it!".

 */

export function guessNumber(secret, guess) {
  if (guess === secret) {
    return 'you got it!';
  } else if (guess > secret) {
    return 'lower';
  } else if (guess < secret) {
    return 'higher';
  }
}
