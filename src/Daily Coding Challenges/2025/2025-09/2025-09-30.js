/**

Phone Number Formatter

Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".

*/

function formatNumber(number) {
  const country = number[0],
    area = number.slice(1, 4),
    first = number.slice(4, 7),
    last = number.slice(7);
  return `+${country} (${area}) ${first}-${last}`;
}
