/**

Sentence Capitalizer

Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

All other characters should be preserved.
Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).

*/

function capitalize(paragraph) {
  return paragraph.replace(/(^\s*[a-z])|([.!?]+[\s]*[a-z])/g, (match) => match.toUpperCase());
}
