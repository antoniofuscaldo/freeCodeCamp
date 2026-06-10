/**

Itinerary Arrangements

Given an array of at least two optional stops for a day trip, return the number of valid itinerary arrangements.

The itinerary always includes "breakfast", "lunch", and "dinner", these will not be passed in as arguments. The optional stops can be placed anywhere in the itinerary, subject to the following rules:

"breakfast" is always first, with at least one stop before "lunch".
"lunch" must appear before "dinner", with at least one stop in between.
At most, one optional stop may appear after "dinner".
Return the number of valid arrangements.

*/

function getItineraryCount(stops) {
  const n = stops.length;

  function fact(x) {
    let r = 1;
    for (let i = 2; i <= x; i++) r *= i;
    return r;
  }

  function C(n, k) {
    if (k < 0 || k > n) return 0;
    let r = 1;
    for (let i = 1; i <= k; i++) r = (r * (n - i + 1)) / i;
    return r;
  }

  let total = 0;

  // C = 0 stops after dinner
  for (let A = 1; A <= n - 1; A++) {
    const B = n - A;
    if (B >= 1) {
      total += C(n, A) * fact(A) * fact(B);
    }
  }

  // C = 1 stop after dinner
  for (let A = 1; A <= n - 2; A++) {
    const B = n - 1 - A;
    if (B >= 1) {
      total += n * C(n - 1, A) * fact(A) * fact(B);
    }
  }

  return total;
}
