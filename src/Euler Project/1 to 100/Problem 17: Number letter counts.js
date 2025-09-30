/**

Problem 17: Number letter counts

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

*/

function numberLetterCounts(limit) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function toWords(n) {
    if (n === 1000) return "onethousand";
    let word = "";
    if (n >= 100) {
      word += ones[Math.floor(n / 100)] + "hundred";
      if (n % 100 !== 0) word += "and";
      n %= 100;
    }
    if (n >= 20) {
      word += tens[Math.floor(n / 10)];
      if (n % 10 !== 0) word += ones[n % 10];
    } else if (n > 0) {
      word += ones[n];
    }
    return word;
  }

  let total = 0;
  for (let i = 1; i <= limit; i++) {
    total += toWords(i).length;
  }
  return total;
}

numberLetterCounts(5);
