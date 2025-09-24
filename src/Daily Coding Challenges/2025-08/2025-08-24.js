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

*/

function battle(myArmy, opposingArmy) {
  // Step 1: check lengths
  if (myArmy.length > opposingArmy.length) return "Opponent retreated";
  if (myArmy.length < opposingArmy.length) return "We retreated";
  function getStrength(ch) {
    if (/[a-z]/.test(ch)) {
      return ch.charCodeAt(0) - 96;
    } else if (/[A-Z]/.test(ch)) {
      return ch.charCodeAt(0) - 64 + 26;
    } else if (/[0-9]/.test(ch)) {
      return Number(ch);
    } else {
      return 0;
    }
  }
  let myWins = 0;
  let opponentWins = 0;
  for (let i = 0; i < myArmy.length; i++) {
    let myStrength = getStrength(myArmy[i]);
    let oppStrength = getStrength(opposingArmy[i]);
    if (myStrength > oppStrength) {
      myWins++;
    } else if (oppStrength > myStrength) {
      opponentWins++;
    }
  }
  if (myWins > opponentWins) return "We won";
  if (myWins < opponentWins) return "We lost";
  return "It was a tie";
}
