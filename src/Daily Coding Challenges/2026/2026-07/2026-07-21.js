/**

Word Blender

Given two words, return a new word by combining the first half of the first word with the second half of the second word.

For odd-length words, the first half is the shorter half.

Tests:
Waiting:1. blendWords("turtle", "toucan") should return "turcan".
Waiting:2. blendWords("chipmunk", "flamingo") should return "chipingo".
Waiting:3. blendWords("falcon", "pelican") should return "falican".
Waiting:4. blendWords("hyena", "iguana") should return "hyana".
Waiting:5. blendWords("scorpion", "gorilla") should return "scorilla".
Waiting:6. blendWords("platypus", "wolverine") should return "platerine".

*/

export function blendWords(word1, word2) {
  const mid1 = Math.floor(word1.length / 2);
  const mid2 = Math.floor(word2.length / 2);

  return word1.slice(0, mid1) + word2.slice(mid2);
}
