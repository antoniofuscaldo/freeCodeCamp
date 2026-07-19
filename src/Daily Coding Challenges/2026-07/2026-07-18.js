/**

Dice Odds

Given a number of six-sided dice to roll and a target sum, return the odds of rolling that sum as a string in the format "1 in X".

The number of dice will be between 1 and 6.
The target sum is always achievable with the given number of dice.
Round "X" to the nearest whole number.

Tests:
Waiting:1. getOdds(1, 5) should return "1 in 6".
Waiting:2. getOdds(2, 4) should return "1 in 12".
Waiting:3. getOdds(3, 10) should return "1 in 8".
Waiting:4. getOdds(4, 7) should return "1 in 65".
Waiting:5. getOdds(5, 26) should return "1 in 111".
Waiting:6. getOdds(6, 35) should return "1 in 7776".

*/

function getOdds(dice, target) {
  const ways = Array.from({ length: dice + 1 }, () =>
    Array(target + 1).fill(0),
  );
  ways[0][0] = 1;

  for (let d = 1; d <= dice; d++) {
    for (let s = 1; s <= target; s++) {
      let count = 0;
      for (let face = 1; face <= 6; face++) {
        if (s - face >= 0) count += ways[d - 1][s - face];
      }
      ways[d][s] = count;
    }
  }

  const successful = ways[dice][target];
  const total = Math.pow(6, dice);
  const odds = Math.round(total / successful);

  return `1 in ${odds}`;
}
