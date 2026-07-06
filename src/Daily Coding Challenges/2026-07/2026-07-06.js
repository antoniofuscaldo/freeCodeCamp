/**

lowercase words

Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.

Tests:
Waiting:1. getLowercaseWords("hello GOOD world") should return "hello world".
Waiting:2. getLowercaseWords("these are all lowercase") should return "these are all lowercase".
Waiting:3. getLowercaseWords("less is NoT more") should return "less is more".
Waiting:4. getLowercaseWords("DonT eat pizza every OTHER day") should return "eat pizza every day".
Waiting:5. getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog") should return "the quick brown fox jumped over the lazy dog".

*/

export function getLowercaseWords(str) {
  return str
    .split(' ')
    .filter(Boolean)
    .filter((w) => /^[a-z]+$/.test(w))
    .join(' ');
}
