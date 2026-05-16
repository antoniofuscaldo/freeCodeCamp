/**

Longest Domino Chain

Given a 2D array representing a set of dominoes, return the longest valid chain.

Each domino is a pair of numbers from 0–6, e.g. [3, 2].
A chain is valid when the second number of each domino matches the first number of the next.
The first number of the first domino and the second number of the last one don't need to match anything.
Any domino can be flipped, so [3, 2] can be played as [2, 3].
There is always exactly one longest valid chain.
For example, given [[1, 2], [4, 5], [2, 3]], return [[1, 2], [2, 3]].

*/

function getLongestChain(dominoes) {
  let best = [];

  const dfs = (chain, used) => {
    if (chain.length > best.length) best = chain;

    const last = chain.length ? chain[chain.length - 1][1] : null;

    for (let i = 0; i < dominoes.length; i++) {
      if (used[i]) continue;

      const [a, b] = dominoes[i];

      if (chain.length === 0 || a === last) {
        used[i] = true;
        dfs([...chain, [a, b]], used);
        used[i] = false;
      }

      if (chain.length === 0 || b === last) {
        used[i] = true;
        dfs([...chain, [b, a]], used);
        used[i] = false;
      }
    }
  };

  dfs([], Array(dominoes.length).fill(false));
  return best;
}
