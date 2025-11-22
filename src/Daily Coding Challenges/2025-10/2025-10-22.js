/**

Speak Wisely, You Must
Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

Words are separated by a single space.
Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
Move all words before and including that word to the end of the sentence and:
Preserve the order of the words when you move them.
Make them all lowercase.
And add a comma and space before them.
Capitalize the first letter of the new first word of the sentence.
All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.
For example, given "You must speak wisely." return "Speak wisely, you must."

*/

function wiseSpeak(sentence) {
  const punctuation = sentence[sentence.length - 1],
    words = sentence.slice(0, -1).split(' '),
    keywords = ['have', 'must', 'are', 'will', 'can'],
    index = words.findIndex((w) => keywords.includes(w.toLowerCase()));
  if (index === -1) return sentence;
  const firstPart = words
      .slice(0, index + 1)
      .join(' ')
      .toLowerCase(),
    secondPart = words.slice(index + 1).join(' '),
    result = secondPart.charAt(0).toUpperCase() + secondPart.slice(1);
  return `${result}, ${firstPart}${punctuation}`;
}
