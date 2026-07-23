/**

Game Theory

Given two equal length strings representing two players' strategies for a game, return the scores as an array [player1, player2].

The given strings will only contain one of two letters: "C" (cooperate) or "D" (defect).
Each character represents one round, scored as follows:
If both players cooperate, each scores 3.
If both players defect, each scores 1.
If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0.

Tests:
Waiting:1. playGame("CCCC", "CCCC") should return [12, 12].
Waiting:2. playGame("DDDD", "DDDD") should return [4, 4].
Waiting:3. playGame("CCDD", "CDDD") should return [5, 10].
Waiting:4. playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD") should return [24, 34].
Waiting:5. playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC") should return [66, 21].

*/

export function playGame(p1, p2) {
  let s1 = 0,
    s2 = 0;

  for (let i = 0; i < p1.length; i++) {
    const a = p1[i],
      b = p2[i];

    if (a === 'C' && b === 'C') {
      s1 += 3;
      s2 += 3;
    } else if (a === 'D' && b === 'D') {
      s1 += 1;
      s2 += 1;
    } else if (a === 'D' && b === 'C') {
      s1 += 5;
      s2 += 0;
    } else {
      // a === 'C' && b === 'D'
      s1 += 0;
      s2 += 5;
    }
  }

  return [s1, s2];
}
