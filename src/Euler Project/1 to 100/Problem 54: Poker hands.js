/**

Problem 54: Poker hands

In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
The cards are valued in the order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

Hand	Player 1	Player 2	Winner
1	5H 5C 6S 7S KD
Pair of Fives	2C 3S 8S 8D TD
Pair of Eights	Player 2
2	5D 8C 9S JS AC
Highest card Ace	2C 5C 7D 8S QH
Highest card Queen	Player 1
3	2D 9C AS AH AC
Three Aces	3D 6D 7D TD QD
Flush with Diamonds	Player 2
4	4D 6S 9H QH QC
Pair of Queens
Highest card Nine	3D 6D 7H QD QS
Pair of Queens
Highest card Seven	Player 1
5	2H 2D 4C 4D 4S
Full House
with Three Fours	3C 3D 3S 9S 9D
Full House
with Three Threes	Player 1
The global array (handsArr) passed to the function, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

How many hands does Player 1 win?

*/

function pokerHands(arr) {
  const R = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, T: 10, J: 11, Q: 12, K: 13, A: 14 };

  function parse(cards) {
    return cards.map((c) => [R[c[0]], c[1]]);
  }

  function evaluate(cards) {
    const ranks = cards.map((c) => c[0]).sort((a, b) => b - a);
    const suits = cards.map((c) => c[1]);
    const isFlush = suits.every((s) => s === suits[0]);

    // Rank counts
    const count = new Map();
    for (const r of ranks) count.set(r, (count.get(r) || 0) + 1);

    // Ace-low straight check
    const unique = [...new Set(ranks)].sort((a, b) => b - a);
    let isStraight = false,
      straightHigh = unique[0];
    if (unique.length === 5) {
      isStraight = unique.every((r, i) => unique[0] - i === r);
      // A-2-3-4-5
      if (!isStraight && unique.toString() === '14,5,4,3,2') {
        isStraight = true;
        straightHigh = 5;
      }
    }

    // Group ranks by frequency then by rank desc
    const groups = [...count.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);

    if (isFlush && isStraight) {
      // Royal Flush or Straight Flush
      if (
        straightHigh === 14 &&
        ranks.includes(10) &&
        ranks.includes(11) &&
        ranks.includes(12) &&
        ranks.includes(13)
      )
        return [9]; // Royal Flush
      return [8, straightHigh];
    }
    if (groups[0][1] === 4) {
      const quad = groups[0][0],
        kick = groups[1][0];
      return [7, quad, kick];
    }
    if (groups[0][1] === 3 && groups[1][1] === 2) {
      return [6, groups[0][0], groups[1][0]];
    }
    if (isFlush) {
      return [5, ...ranks];
    }
    if (isStraight) {
      return [4, straightHigh];
    }
    if (groups[0][1] === 3) {
      const triple = groups[0][0];
      const kickers = groups
        .slice(1)
        .map((g) => g[0])
        .sort((a, b) => b - a);
      return [3, triple, ...kickers];
    }
    if (groups[0][1] === 2 && groups[1][1] === 2) {
      const hiPair = Math.max(groups[0][0], groups[1][0]);
      const loPair = Math.min(groups[0][0], groups[1][0]);
      const kick = groups[2][0];
      return [2, hiPair, loPair, kick];
    }
    if (groups[0][1] === 2) {
      const pair = groups[0][0];
      const kickers = groups
        .slice(1)
        .map((g) => g[0])
        .sort((a, b) => b - a);
      return [1, pair, ...kickers];
    }
    return [0, ...ranks];
  }

  function cmp(a, b) {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      const x = a[i] ?? -Infinity,
        y = b[i] ?? -Infinity;
      if (x !== y) return x - y;
    }
    return 0;
  }

  let wins = 0;
  for (const line of arr) {
    const parts = line.trim().split(/\s+/);
    const p1 = parse(parts.slice(0, 5));
    const p2 = parse(parts.slice(5));
    const e1 = evaluate(p1);
    const e2 = evaluate(p2);
    if (cmp(e1, e2) > 0) wins++;
  }
  return wins;
}

const testArr = [
  '8C TS KC 9H 4S 7D 2S 5D 3S AC',
  '5C AD 5D AC 9C 7C 5H 8D TD KS',
  '3H 7H 6S KC JS QH TD JC 2D 8S',
  'TH 8H 5C QS TC 9H 4D JC KS JS',
  '7C 5H KC QH JD AS KH 4C AD 4S',
];

pokerHands(testArr);
