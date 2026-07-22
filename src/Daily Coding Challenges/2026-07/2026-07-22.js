/**

Piggy Bank

Given an object representing a piggy bank, return the total value as a string formatted as "$D.CC".

The object may contain any of the following:

Coin	Value
pennies	$0.01
nickels	$0.05
dimes	$0.10
quarters	$0.25

Tests:
Waiting:1. piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 }) should return "$1.98".
Waiting:2. piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 }) should return "$0.41".
Waiting:3. piggyBank({ nickels: 8, dimes: 6, quarters: 5 }) should return "$2.25".
Waiting:4. piggyBank({}) should return "$0.00".
Waiting:5. piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 }) should return "$6.76".

*/

export function piggyBank(coins) {
  const values = {
    pennies: 0.01,
    nickels: 0.05,
    dimes: 0.1,
    quarters: 0.25,
  };

  let total = 0;

  for (const type in values) {
    if (coins[type]) {
      total += coins[type] * values[type];
    }
  }

  return '$' + total.toFixed(2);
}
