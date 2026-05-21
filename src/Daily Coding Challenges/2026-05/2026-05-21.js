/**

I Before E

Given a word or sentence, return a corrected version where every word follows the "I before E except after C" rule.

If a word contains "ei" not preceded by "c", replace it with "ie".
If a word contains "ie" preceded by "c", replace it with "ei".
All other words are left unchanged.

*/

function iBeforeE(sentence) {
  return sentence
    .split(' ')
    .map((w) => w.replace(/(?<!c)ei/g, 'ie').replace(/cie/g, 'cei'))
    .join(' ');
}
