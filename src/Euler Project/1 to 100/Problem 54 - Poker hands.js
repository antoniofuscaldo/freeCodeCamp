function pokerHands(arr) {
  const R = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  function parse(cards) {
    return cards.map((c) => [R[c[0]], c[1]]);
  }

  function evaluate(cards) {
    const ranks = cards.map((c) => c[0]).sort((a, b) => b - a),
      suits = cards.map((c) => c[1]),
      isFlush = suits.every((s) => s === suits[0]),
      // Rank counts
      count = new Map();
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
    const groups = [...count.entries()].sort(
      (a, b) => b[1] - a[1] || b[0] - a[0],
    );

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
      const triple = groups[0][0],
        kickers = groups
          .slice(1)
          .map((g) => g[0])
          .sort((a, b) => b - a);
      return [3, triple, ...kickers];
    }
    if (groups[0][1] === 2 && groups[1][1] === 2) {
      const hiPair = Math.max(groups[0][0], groups[1][0]),
        loPair = Math.min(groups[0][0], groups[1][0]),
        kick = groups[2][0];
      return [2, hiPair, loPair, kick];
    }
    if (groups[0][1] === 2) {
      const pair = groups[0][0],
        kickers = groups
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
    const parts = line.trim().split(/\s+/),
      p1 = parse(parts.slice(0, 5)),
      p2 = parse(parts.slice(5)),
      e1 = evaluate(p1),
      e2 = evaluate(p2);
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
