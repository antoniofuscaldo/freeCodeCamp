/**

Credit Card Masker

Given a string of credit card numbers, return a masked version of it using the following constraints:

The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
Replace all numbers, except the last four, with an asterisk (*).
Leave the remaining characters unchanged.
For example, given "4012-8888-8888-1881" return "****-****-****-1881".

*/

function mask(card) {
  let parts = card.split(/[- ]/);
  for (let i = 0; i < parts.length - 1; i++) {
    parts[i] = "****";
  }
  return parts.join(card.includes("-") ? "-" : " ");
}
