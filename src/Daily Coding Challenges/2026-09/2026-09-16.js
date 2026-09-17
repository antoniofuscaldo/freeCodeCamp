/**

Sentence Capitalizer

Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

All other characters should be preserved.
Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).

Tests:
Waiting:1. capitalize("this is a simple sentence.") should return "This is a simple sentence.".
Waiting:2. capitalize("hello world. how are you?") should return "Hello world. How are you?".
Waiting:3. capitalize("i did today's coding challenge... it was fun!!") should return "I did today's coding challenge... It was fun!!".
Waiting:4. capitalize("crazy!!!strange???unconventional...sentences.") should return "Crazy!!!Strange???Unconventional...Sentences.".
Waiting:5. capitalize("there's a space before this period . why is there a space before that period ?") should return "There's a space before this period . Why is there a space before that period ?".

*/

export function capitalize(paragraph) {
  let result = '';
  let capitalizeNext = true;
  for (let i = 0; i < paragraph.length; i++) {
    const ch = paragraph[i];
    if (capitalizeNext && /[a-zA-Z]/.test(ch)) {
      result += ch.toUpperCase();
      capitalizeNext = false;
    } else {
      result += ch;
      if (/[.?!]/.test(ch)) capitalizeNext = true;
    }
  }
  return result;
}
