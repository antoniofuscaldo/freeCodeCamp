/**

Pocket Change

Given an array of integers representing the coins in your pocket, with each integer being the value of a coin in cents, return the total amount in the format "$D.CC".

100 cents equals 1 dollar.
In the return value, include a leading zero for amounts less than one dollar and always exactly two digits for the cents.

*/

function countChange(change) {
  const total = change.reduce((a, b) => a + b, 0);
  const dollars = Math.floor(total / 100);
  const cents = total % 100;
  return '$' + dollars + '.' + String(cents).padStart(2, '0');
}
