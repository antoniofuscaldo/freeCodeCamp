/**

Exact Change

Given an integer amount in cents, return the number of distinct ways to make exact change using pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

Tests:
Waiting:1. exactChange(3) should return 1.
Waiting:2. exactChange(9) should return 2.
Waiting:3. exactChange(17) should return 6.
Waiting:4. exactChange(39) should return 24.
Waiting:5. exactChange(61) should return 73.
Waiting:6. exactChange(99) should return 213.

*/

export function exactChange(amount) {
  const coins = [1, 5, 10, 25];
  const ways = new Array(amount + 1).fill(0);
  ways[0] = 1;
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      ways[i] += ways[i - coin];
    }
  }
  return ways[amount];
}
