/**

Hidden Key

Welcome to the 250th daily challenge!

Given an encoded string, decode it using an encryption key and return it.

To find the key:

Look at all daily challenges up to today whose challenge number is a multiple of 25 (including this one).
Take the first letter from each of those challenge titles and combine them into a string. If the title starts with a non-letter, find its first letter.
To decode the message, go over each letter in the encoded message and:

Look at the corresponding letter in the key (repeat the key if the message is longer than the key).
Convert the key letter to its corresponding number: "A" = 1, "B" = 2, ..., "Z" = 26.
Shift the encoded letter backward in the alphabet by that number.
If the shift goes before "A", wrap around to "Z".
For example, if the encoded message starts with "Y" and the first key letter is "V" (22), shift "Y" back 22 places to get "C". Repeat this process for each letter to decode the full message.

Only letters are shifted, spaces are returned as-is.
All given and returned letters are uppercase.

*/

function decode(message) {
  const key = 'VLHCGMDLNH';
  const A = 'A'.charCodeAt(0); // 65
  let result = '';
  let keyIndex = 0;

  for (let char of message) {
    // Spaces are not encoded
    if (char === ' ') {
      result += ' ';
      continue;
    }

    const shift = key.charCodeAt(keyIndex % key.length) - A + 1;

    const encodedVal = char.charCodeAt(0) - A;

    const decodedVal = (encodedVal - shift + 26) % 26;

    result += String.fromCharCode(decodedVal + A);
    keyIndex++;
  }

  return result;
}
