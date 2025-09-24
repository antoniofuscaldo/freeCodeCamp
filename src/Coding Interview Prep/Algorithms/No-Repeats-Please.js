/**

No Repeats Please

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/

function permAlone(str) {
  function hasRepeats(s) {
    return /(.)\1/.test(s);
  }
  function permute(arr) {
    if (arr.length === 1) return [arr];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      let perms = permute(remaining);
      for (let p of perms) {
        result.push([current].concat(p));
      }
    }
    return result;
  }
  let perms = permute(str.split(""));
  let permStrings = perms.map((p) => p.join(""));
  let valid = permStrings.filter((p) => !hasRepeats(p));
  return valid.length;
}
console.log(permAlone("aab"));
