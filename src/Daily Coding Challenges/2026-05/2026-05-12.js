/**

Character Frequency

Given a string, return an object (JavaScript) or dictionary (Python) mapping each character to the number of times it appears.

*/

function getFrequency(str) {
  const freq = {};
  for (const c of str) freq[c] = (freq[c] || 0) + 1;
  return freq;
}
