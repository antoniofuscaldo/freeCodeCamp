/**

 SCREAMING_SNAKE_CASE

 Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.

 The given variable names will be written in one of the following formats:

 camelCase
 PascalCase
 snake_case
 kebab-case
 In the above formats, words are separated by an underscore (_), a hyphen (-), or a new word starts with a capital letter.

 To convert to SCREAMING_SNAKE_CASE:

 Make all letters uppercase
 Separate words with an underscore (_)

 */

function toScreamingSnakeCase(variableName) {
  return variableName
    .replace(/-/g, '_')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toUpperCase();
}
