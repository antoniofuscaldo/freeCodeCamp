/**

Message Decoder

Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.

Tests:
Waiting:1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
Waiting:2. decode("Byffi Qilfx!", 20) should return "Hello World!"
Waiting:3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"
Waiting:4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"

*/

export function decode(message, shift) {
  const s = ((shift % 26) + 26) % 26;
  let out = '';

  for (let i = 0; i < message.length; i++) {
    const ch = message[i];
    const code = ch.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      const pos = code - 65;
      const decodedPos = (pos - s + 26) % 26;
      out += String.fromCharCode(65 + decodedPos);
      continue;
    }

    if (code >= 97 && code <= 122) {
      const pos = code - 97;
      const decodedPos = (pos - s + 26) % 26;
      out += String.fromCharCode(97 + decodedPos);
      continue;
    }

    out += ch;
  }

  return out;
}
