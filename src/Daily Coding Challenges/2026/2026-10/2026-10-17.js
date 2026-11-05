/**

Credit Card Masker

Given a string of credit card numbers, return a masked version of it using the following constraints:

The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
Replace all numbers, except the last four, with an asterisk (*).
Leave the remaining characters unchanged.
For example, given "4012-8888-8888-1881" return "****-****-****-1881".

Tests:
Waiting:1. mask("4012-8888-8888-1881") should return "****-****-****-1881".
Waiting:2. mask("5105 1051 0510 5100") should return "**** **** **** 5100".
Waiting:3. mask("6011 1111 1111 1117") should return "**** **** **** 1117".
Waiting:4. mask("2223-0000-4845-0010") should return "****-****-****-0010".

*/

export function mask(card) {
  return card.slice(0, -4).replace(/\d/g, '*') + card.slice(-4);
}
