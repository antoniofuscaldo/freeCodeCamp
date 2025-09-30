/**

Phone Number Formatter

Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".

*/

function formatNumber(number) {
  let country = number[0];
  let area = number.slice(1, 4);
  let first = number.slice(4, 7);
  let last = number.slice(7);
  return `+${country} (${area}) ${first}-${last}`;
}
