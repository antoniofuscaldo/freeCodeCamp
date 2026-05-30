/**

Best Hand

Given an array of five strings representing playing cards, return the name of the best hand.

Each card is represented as a two-character string: the rank followed by the suit, "2h" for example.
Ranks, from low to high, are: "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", and "A".
Suits are: "h", "d", "c", and "s".
Aces ("A") can be used as high or low in a straight.
The hands, in order from worst to best, are:

Name	Description
"High Card"	No pair or better
"Pair"	Two of one rank
"Two Pair"	Two of one rank and two of another
"Three of a Kind"	Three of one rank
"Straight"	Five ranks in a row
"Flush"	Five of the same suit
"Full House"	Three of one rank, and two of another
"Four of a Kind"	Four of one rank
"Straight Flush"	Five ranks in a row of the same suit
"Royal Flush"	"A", "K", "Q", "J", "T" of the same suit
Return the name of the best hand.

*/

function getBestHand(cards) {
  const ranks = '23456789TJQKA';
  const vals = cards.map((c) => c[0]);
  const suits = cards.map((c) => c[1]);

  const count = {};
  for (const v of vals) count[v] = (count[v] || 0) + 1;
  const groups = Object.values(count).sort((a, b) => b - a);

  const nums = vals.map((v) => ranks.indexOf(v)).sort((a, b) => a - b);
  const isStraight = () => {
    if (nums[4] - nums[0] === 4 && new Set(nums).size === 5) return true;
    const low = nums.slice();
    if (JSON.stringify(low) === JSON.stringify([0, 1, 2, 3, 12])) return true;
    return false;
  };

  const flush = new Set(suits).size === 1;
  const straight = isStraight();

  if (
    flush &&
    JSON.stringify(vals.sort()) ===
      JSON.stringify(['A', 'J', 'K', 'Q', 'T'].sort())
  )
    return 'Royal Flush';
  if (flush && straight) return 'Straight Flush';
  if (groups[0] === 4) return 'Four of a Kind';
  if (groups[0] === 3 && groups[1] === 2) return 'Full House';
  if (flush) return 'Flush';
  if (straight) return 'Straight';
  if (groups[0] === 3) return 'Three of a Kind';
  if (groups[0] === 2 && groups[1] === 2) return 'Two Pair';
  if (groups[0] === 2) return 'Pair';
  return 'High Card';
}
