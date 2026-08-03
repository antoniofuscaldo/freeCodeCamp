/**

Emoji Translator

Given a string of emojis, return the phrase using the following table:

Emoji	Word
👶	"baby"
🐱	"cat"
🐕	"dog"
🐟	"fish"
🥵	"hot"
🧊	"ice"
🪨	"rock"
🦈	"shark"
🍲	"soup"
⭐	"star"
Return the words separated by spaces.

Tests:
Waiting:1. getEmojiPhrase("🪨⭐") should return "rock star".
Waiting:2. getEmojiPhrase("🥵🐕") should return "hot dog".
Waiting:3. getEmojiPhrase("👶🦈") should return "baby shark".
Waiting:4. getEmojiPhrase("⭐🐟") should return "star fish".
Waiting:5. getEmojiPhrase("🧊🧊👶") should return "ice ice baby".
Waiting:6. getEmojiPhrase("🐱🐟🍲") should return "cat fish soup".

*/

export function getEmojiPhrase(str) {
  const map = {
    '👶': 'baby',
    '🐱': 'cat',
    '🐕': 'dog',
    '🐟': 'fish',
    '🥵': 'hot',
    '🧊': 'ice',
    '🪨': 'rock',
    '🦈': 'shark',
    '🍲': 'soup',
    '⭐': 'star',
  };

  return [...str].map((e) => map[e]).join(' ');
}
