/**

Number Words

Given an integer from 0 to 99, return its English word representation.

0 returns "zero".
Numbers 1-19 have unique names ("one", "two", ..., "ten", "eleven", ..., "eighteen", "nineteen").
Multiples of 10 from 20-90 have their own names ("twenty", "thirty", ..., "eighty", "ninety").
Numbers 21-99 that are not multiples of 10 are written as two words joined by a hyphen. For example "forty-two" and "fifty-three".

*/

function getNumberWords(n) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (n < 20) return ones[n];
  if (n % 10 === 0) return tens[n / 10];
  return tens[Math.floor(n / 10)] + '-' + ones[n % 10];
}
