/**

Parentheses Combinations

Given an integer, n, return the number of valid combinations of n pairs of parentheses.

A valid combination is a string where every opening parentheses has a corresponding closing parentheses, and no closing parentheses appears before its matching opening parentheses.
For example, given 2, there are 2 valid combinations:

(())
()()

Tests:
Waiting:1. getCombinations(2) should return 2.
Waiting:2. getCombinations(3) should return 5.
Waiting:3. getCombinations(5) should return 42.
Waiting:4. getCombinations(8) should return 1430.
Waiting:5. getCombinations(13) should return 742900.

*/

export function getCombinations(n) {
  if (n === 0) return 1;
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) dp[i] += dp[j] * dp[i - 1 - j];
  }
  return dp[n];
}
