/**

3 Strikes

Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.

*/

function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let square = i * i;
    if (square.toString().includes("3")) {
      count++;
    }
  }
  return count;
}
