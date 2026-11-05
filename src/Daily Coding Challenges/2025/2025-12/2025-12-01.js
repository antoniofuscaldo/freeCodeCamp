/**

Miles to Kilometers

Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places.

*/

function convertToKm(miles) {
  return +(miles * 1.60934).toFixed(2);
}
