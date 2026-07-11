/**

Five Dice

Given an array of five dice with values 1-6, return the best possible hand.

Here are the hands ranked lowest to highest:

Hand	Description
"no pair"	No pair or better
"pair"	Two dice with the same value
"two pair"	Two different pairs
"three of a kind"	Three dice with the same value
"small straight"	Four consecutive values
"large straight"	Five consecutive values
"full house"	Three of a kind and a pair
"four of a kind"	Four dice with the same value
"five of a kind"	All five dice with the same value

Tests:
Waiting:1. fiveDice([1, 1, 1, 1, 1]) should return "five of a kind".
Waiting:2. fiveDice([5, 5, 5, 6, 5]) should return "four of a kind".
Waiting:3. fiveDice([2, 5, 6, 4, 3]) should return "large straight".
Waiting:4. fiveDice([4, 3, 3, 3, 1]) should return "three of a kind".
Waiting:5. fiveDice([4, 6, 2, 6, 5]) should return "pair".
Waiting:6. fiveDice([1, 4, 5, 6, 2]) should return "no pair".
Waiting:7. fiveDice([1, 3, 4, 6, 2]) should return "small straight".
Waiting:8. fiveDice([2, 2, 5, 2, 5]) should return "full house".
Waiting:9. fiveDice([6, 4, 5, 6, 4]) should return "two pair".

*/

export function fiveDice(dice) {
  const counts = {};
  for (const d of dice) counts[d] = (counts[d] || 0) + 1;
  const freqs = Object.values(counts).sort((a, b) => b - a);
  const unique = Array.from(new Set(dice)).sort((a, b) => a - b);
  const isLargeStraight =
    unique.length === 5 &&
    unique[4] - unique[0] === 4 &&
    unique.every((v, i) => v === unique[0] + i);
  const s = new Set(unique);
  const isSmallStraight = [1, 2, 3].some((start) =>
    [start, start + 1, start + 2, start + 3].every((v) => s.has(v)),
  );

  if (freqs[0] === 5) return 'five of a kind';
  if (freqs[0] === 4) return 'four of a kind';
  if (freqs[0] === 3 && freqs[1] === 2) return 'full house';
  if (isLargeStraight) return 'large straight';
  if (isSmallStraight) return 'small straight';
  if (freqs[0] === 3) return 'three of a kind';
  if (freqs[0] === 2 && freqs[1] === 2) return 'two pair';
  if (freqs[0] === 2) return 'pair';
  return 'no pair';
}
