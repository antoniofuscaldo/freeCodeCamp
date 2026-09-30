/**

Phone Number Formatter

Given a string of eleven digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".

Tests:
Waiting:1. formatNumber("05552340182") should return "+0 (555) 234-0182".
Waiting:2. formatNumber("15554354792") should return "+1 (555) 435-4792".

*/

function formatNumber(number) {
  return `+${number[0]} (${number.slice(1, 4)}) ${number.slice(4, 7)}-${number.slice(7)}`;
}
