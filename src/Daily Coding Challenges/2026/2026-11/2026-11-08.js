/**

Character Limit

In this challenge, you are given a string and need to determine if it fits in a social media post. Return the following strings based on the rules given:

"short post" if it fits within a 40-character limit.
"long post" if it's greater than 40 characters and fits within an 80-character limit.
"invalid post" if it's too long to fit within either limit.

Tests:
Waiting:1. canPost("Hello world") should return "short post".
Waiting:2. canPost("This is a longer message but still under eighty characters.") should return "long post".
Waiting:3. canPost("This message is too long to fit into either of the character limits for a social media post.") should return "invalid post".

*/

export function canPost(message) {
  const length = message.length;
  if (length <= 40) return 'short post';
  if (length <= 80) return 'long post';
  return 'invalid post';
}
