/**

Message Decoder

Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.

*/

function decode(message, shift) {
  let result = '';
  for (let char of message) {
    if (/[a-zA-Z]/.test(char)) {
      let base = char === char.toUpperCase() ? 65 : 97;
      let decodedChar = String.fromCharCode(
        ((char.charCodeAt(0) - base - shift + 26 * 1000) % 26) + base
      );
      result += decodedChar;
    } else {
      result += char;
    }
  }
  return result;
}
