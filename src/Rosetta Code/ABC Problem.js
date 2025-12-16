/**

ABC Problem

You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:

(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.

Some rules to keep in mind:

Once a letter on a block is used, that block cannot be used again.
The function should be case-insensitive.

*/

function canMakeWord(word) {
  const blocks = [
      ['B', 'O'],
      ['X', 'K'],
      ['D', 'Q'],
      ['C', 'P'],
      ['N', 'A'],
      ['G', 'T'],
      ['R', 'E'],
      ['T', 'G'],
      ['Q', 'D'],
      ['F', 'S'],
      ['J', 'W'],
      ['H', 'U'],
      ['V', 'I'],
      ['A', 'N'],
      ['O', 'B'],
      ['E', 'R'],
      ['F', 'S'],
      ['L', 'Y'],
      ['P', 'C'],
      ['Z', 'M'],
    ],
    used = new Array(blocks.length).fill(false),
    letters = word.toUpperCase().split('');

  for (const letter of letters) {
    let found = false;
    for (let i = 0; i < blocks.length; i++) {
      if (!used[i] && (blocks[i][0] === letter || blocks[i][1] === letter)) {
        used[i] = true;
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}
