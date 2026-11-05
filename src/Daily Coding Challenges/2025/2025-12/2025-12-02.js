/**

Camel to Snake

Given a string in camel case, return the snake case version of the string using the following rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_).

*/

function toSnake(camel) {
  return camel.replace(/([A-Z])/g, '_$1').toLowerCase();
}
