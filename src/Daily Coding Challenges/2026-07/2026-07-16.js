/**

Pig Latin Converter

Given a string, convert it to Pig Latin using the following rules:

If a word begins with a vowel ("a", "e", "i", "o", or "u"), add "way" to the end. For example, "universe" converts to "universeway".
If a word begins with one or more consonants, move them to the end and add "ay". For example, "hello" converts to "ellohay".
Preserve the case of the first letter. For example, "Hello" converts to "Ellohay".

Tests:
Waiting:1. pigLatin("universe") should return "universeway".
Waiting:2. pigLatin("hello") should return "ellohay".
Waiting:3. pigLatin("hello universe") should return "ellohay universeway".
Waiting:4. pigLatin("Hello universe") should return "Ellohay universeway".
Waiting:5. pigLatin("Pig Latin is fun") should return "Igpay Atinlay isway unfay".
Waiting:6. pigLatin("The quick brown fox jumped over the lazy dog") should return "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".

*/

export function pigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  function convert(word) {
    if (!word) return word;

    const isCap = word[0] === word[0].toUpperCase();
    const lower = word.toLowerCase();

    if (vowels.includes(lower[0])) {
      const res = lower + 'way';
      return isCap ? res[0].toUpperCase() + res.slice(1) : res;
    }

    let i = 0;
    while (i < lower.length && !vowels.includes(lower[i])) i++;

    const res = lower.slice(i) + lower.slice(0, i) + 'ay';
    return isCap ? res[0].toUpperCase() + res.slice(1) : res;
  }

  return str.split(' ').map(convert).join(' ');
}
