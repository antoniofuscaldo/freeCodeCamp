/**

Battle of Words

Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

The given sentences will always contain the same number of words.
Words are separated by a single space and will only contain letters.
The value of each word is the sum of its letters.
Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
A word wins if its value is greater than the opposing word's value.
The team with more winning words is the winner.
Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.

Tests:
Waiting:1. battle("hello world", "hello word") should return "We win".
Waiting:2. battle("Hello world", "hello world") should return "We win".
Waiting:3. battle("lorem ipsum", "kitty ipsum") should return "We lose".
Waiting:4. battle("hello world", "world hello") should return "Draw".
Waiting:5. battle("git checkout", "git switch") should return "We win".
Waiting:6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".
Waiting:7. battle("We must never surrender", "Our team must win") should return "Draw".

*/

function battle(ourTeam, opponent) {
  const value = (word) =>
    [...word].reduce(
      (sum, c) =>
        sum +
        (c.toLowerCase().charCodeAt(0) - 96) * (c === c.toUpperCase() ? 2 : 1),
      0,
    );

  const ours = ourTeam.split(' ');
  const theirs = opponent.split(' ');
  let score = 0;

  for (let i = 0; i < ours.length; i++) {
    const a = value(ours[i]);
    const b = value(theirs[i]);
    if (a > b) score++;
    else if (a < b) score--;
  }

  return score > 0 ? 'We win' : score < 0 ? 'We lose' : 'Draw';
}
