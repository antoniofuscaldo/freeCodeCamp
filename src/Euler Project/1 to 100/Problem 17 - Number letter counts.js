function numberLetterCounts(limit) {
  const ones = [
      '',
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
    ],
    tens = [
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

  function toWords(n) {
    if (n === 1000) return 'onethousand';
    let word = '';
    if (n >= 100) {
      word += `${ones[Math.floor(n / 100)]}hundred`;
      if (n % 100 !== 0) word += 'and';
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
