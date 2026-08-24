/**

Character Battle

Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.

Tests:
Waiting:1. battle("Hello", "World") should return "We lost".
Waiting:2. battle("pizza", "salad") should return "We won".
Waiting:3. battle("C@T5", "D0G$") should return "We won".
Waiting:4. battle("kn!ght", "orc") should return "Opponent retreated".
Waiting:5. battle("PC", "Mac") should return "We retreated".
Waiting:6. battle("Wizards", "Dragons") should return "It was a tie".
Waiting:7. battle("Mr. Smith", "Dr. Jones") should return "It was a tie".

*/

export function battle(myArmy, opposingArmy) {
  const strength = (ch) => {
    const code = ch.charCodeAt(0);
    if (code >= 97 && code <= 122) return code - 96;
    if (code >= 65 && code <= 90) return code - 65 + 27;
    if (code >= 48 && code <= 57) return code - 48;
    return 0;
  };

  if (myArmy.length > opposingArmy.length) return 'Opponent retreated';
  if (opposingArmy.length > myArmy.length) return 'We retreated';

  let myWins = 0;
  let oppWins = 0;
  const len = Math.min(myArmy.length, opposingArmy.length);

  for (let i = 0; i < len; i++) {
    const a = strength(myArmy[i]);
    const b = strength(opposingArmy[i]);
    if (a > b) myWins++;
    else if (b > a) oppWins++;
  }

  if (myWins > oppWins) return 'We won';
  if (oppWins > myWins) return 'We lost';
  return 'It was a tie';
}
